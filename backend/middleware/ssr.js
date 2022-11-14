const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { User } = require('../db/models');

function renderComponent(reactComponent, props = {}, options = { doctype: true }) {
  const reactElement = React.createElement(reactComponent, {
    ...this.app.locals,
    ...this.locals,
    ...props,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  if (options.doctype) {
    this.write('<!DOCTYPE html>');
  }
  this.end(html);
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

// локальные переменные
const resLocals = (req, res, next) => {
  if (req.session.adminId) {
    res.locals.userId = req.session.adminId;
  }
  res.locals.userId = req.session.userId;
  next();
};

// ищем юзера в Бд по айди
const getUser = async (req, res, next) => {
  if (res.locals.userId) {
    res.locals.user = await User.findByPk(Number(res.locals.userId), { raw: true });
  }
  next();
};

module.exports = { ssr, resLocals, getUser };
