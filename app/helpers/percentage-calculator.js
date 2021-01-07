import { helper } from '@ember/component/helper';

export default helper(function percanteCalculator(params/*, hash*/) {

  return ((params / 66650000) * 100).toFixed(2) 
  // return params;
});
