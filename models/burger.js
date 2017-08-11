module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger: { type: DataTypes.STRING, 
        	allowNull: false, 
            defaultValue: false,
        	// validate: {notEmpty: true}
        	validate: { len: [1, 140] }
        }, 
        devoured: { type: DataTypes.BOOLEAN, 
        	allowNull: false, 
        	defaultValue: false 
        }


    });
    return Burgers;
};