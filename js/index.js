/* 将下面这71个数字改成学生名字就可以了 */
/* 注意这儿的引号和都好都必须是英文字符 */
var _students = [
  "王力宏",
  "周杰伦",
  "周迅",
  "尼古拉斯 · 赵四",
  "刘能",
  "谢广坤",
  "陈一发儿",
  "陈坤",
  "鲁迅",
  "白 · 洁"
]

function Student(name) {
  this.name = name
  this.isAbsent = false
}

function StudentList(list) {
  var arr = []
  for(var i = 0, len = list.length; i < len; i++) {
    var name = list[i]
    arr.push(new Student(name))
  }
  arr.showAbsent = showAbsent
  return arr
}

// showAbsent是StudentList实例的方法
function showAbsent() {
  var arr = []
  if((this.length > 0) && (this[0] instanceof Student)) {
    for(var i = 0, len = this.length; i < len; i++) {
      var student = this[i]
      if(student.isAbsent) {
        arr.push(student.name)
      }
    }
  }
  var str = "共缺席 " + arr.length + " 人： " + arr.join("，") + "。"
  $("#student").removeClass("broadcast-mode").addClass("statistic-mode").text(str)
}

function RollCall() {
  this.current = -1
  // 默认基于日期的随机（意即，该随机状态可以保持一天）
  this.students = new StudentList(_students.shuffleBaseDay())
}
RollCall.prototype = {
  constructor: RollCall,
  init: function() {
    var self = this
    self.startRollCall()
    $("#shuffle").on("click", function() {
      // 强制随机
      self.students = new StudentList(_students._shuffle())
      self.reset()
    })
  },
  startRollCall: function() {
    var self = this
    $("#student").on("click", function() {
      self.next()
    })
  },
  stopRollCall: function() {
    $("#student").off("click")
  },
  reset: function() {
    this.stopRollCall()
    this.current = -1
    $("#student").removeClass("statistic-mode").addClass("broadcast-mode").text("开始点名")
    this.startRollCall()
  },
  render: function() {
    var student = this.getCurrentStudent()
    if(student) {
      $("#student").text(student.name)
    }
  },
  next: function() {
    var student = this.getCurrentStudent()
    if($("#mark-as-absent").prop("checked")) {
      $("#mark-as-absent").prop("checked", false)
      if(student) {
        student.isAbsent = true
      }
    }
    this.current++
    this.handleIfStoped()
    this.render()
  },
  handleIfStoped: function() {
    var isStoped = this.current >= this.students.length
    if(isStoped) {
      this.stopRollCall()
      this.current = -1
      this.students.showAbsent()
    }
  },
  getCurrentStudent: function() {
    if((this.current >= 0) && (this.current < this.students.length)) {
      return this.students[this.current]
    }
    return false
  },
}

var dianming = new RollCall()
dianming.init()
