module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_info', {
        id:{
            type: DataTypes.STRING(30),
            primaryKey: true,
            unique: true
        },
        pwd:{
            type: DataTypes.STRING(100),
            unique: false,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(30),
            unique: false,
            allowNull: false
        },
        age:{
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        sex:{
            type: DataTypes.BOOLEAN,
            unique: false,
            allowNull: false
        },
        loc:{
            type: DataTypes.STRING(30),
            unique: false,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING(11),
            unique: false,
            allowNull: false
        },
        birth:{
            type: DataTypes.DATE,
            unique: false,
            allowNull: true
        },
        nickname:{
            type: DataTypes.STRING(30),
            unique: false,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
};