const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("notes", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    titulo: {
      type: DataTypes.STRING,
    },

    descripcion: {
      type: DataTypes.TEXT,
    },

    archivado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
