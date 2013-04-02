var lb = require("../lb.js")

require("tap").test("lower bound", function(t) {


  t.equals(lb([0,1,1,1,2], -1), -1)
  t.equals(lb([0,1,1,1,2], 0), 0)
  t.equals(lb([0,1,1,1,2], 1), 1)
  t.equals(lb([0,1,1,1,2], 2), 4)
  t.equals(lb([0,1,1,1,2], 0.5), 0)
  t.equals(lb([0,1,1,1,2], 1.5), 3)
  t.equals(lb([0,1,1,1,2], 5), 4)


  t.end()
})