import { RootState } from '../store';
import { TComment } from '../Admin/Adminslice';

const selectApprovedComments = (state: RootState): TComment[] => state.main.comments;
export default selectApprovedComments;
export const getMessage = (state: RootState): string | null => state.main.message;
