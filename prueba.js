var Model = Backbone.Model.extend({});
var mymodel = new Model();         
var View = Backbone.View.extend({
	initialize : function (){
        this.template = Handlebars.compile($("#prueba-template").html());
	},
	events : {
        "click td" : "hey",
        "click tr" : "heyrow"
	},
	hey : function (){
		console.log("hey there colum");
	},
	heyrow : function (){
		console.log("hey there row");
	},
	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
	}
});                             

$(function(){

var myview = new View({model : mymodel, el : $("#tableHolder")});
myview.render();

});