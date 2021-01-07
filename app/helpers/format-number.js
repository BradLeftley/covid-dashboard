import { helper } from '@ember/component/helper';

export default helper(function formatNumber(params/*, hash*/) {
  return new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 8 }).format(params);
});
