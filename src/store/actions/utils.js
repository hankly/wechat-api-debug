import { pick } from '../../common/sugar';
import { FIELDS } from '../../models/account';

// @return [Array] copy of accounts
export function getAccounts(state) {
  return state.accounts.map(a => pick(a, FIELDS));
}

// @return [Object] copy of current account
export function getCurrentAccount(state) {
  let current = state.accounts.filter(a => a.isCurrent);
  if (current.length === 1) {
    return pick(current[0], FIELDS);
  } else {
    throw new Error('NotImplementedError: store.actions.utils.getCurrentAccount');
  }
}
