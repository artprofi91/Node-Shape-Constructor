var Shape = function(type)
	{
		this.type = "Shape";
		this.get_type = function()
		{
			return this.type;
		};
	};

	module.exports = Shape;