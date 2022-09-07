const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('tags',{
        tag_id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true
        },

        nombre : {
            type : DataTypes.STRING
        }        
    })
}