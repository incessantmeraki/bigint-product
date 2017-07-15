var test = require('tape')
var multiply= require('./index.js')

test ('multiply large integers', function (t) {
  t.plan(4)

  t.equal(multiply('123456789','987654321'),'121932631112635269' )
  t.equal(multiply('123456789123456789','98765432123456789'),'12193263126352689864349947750190521' )
  t.equal(multiply('-97826789742679745','5687845124784'),'-556423629111170405450074300080' )
  t.equal(multiply('-12345678945689','-98765432158989'),'1219326316367105772544148421' )
  t.end()
})
