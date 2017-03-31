# formtable
使用angular+bootstarp实现form表单数据动态显示在table中（angular数据的双向绑定的理解），重点是了解angular.
在html中先定义一个angular的app,指定一个angular的controller,则该controller会对应于一个作用域(可以用$scope前缀来指定作用域中的属性和方法等). 则在该ngCtl的作用域内的HTML标签, 其值或者操作都可以通过$scope的方式跟js中的属性和方法进行绑定. 
这样, 就实现了NG的双向数据绑定: 即HTML中呈现的view与AngularJS中的数据是一致的. 修改其一, 则对应的另一端也会相应地发生变化.
