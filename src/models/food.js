import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class food extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    food_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    food_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    food_image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    food_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    food_desc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    food_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'food_type',
        key: 'food_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_id" },
        ]
      },
      {
        name: "food_type_id",
        using: "BTREE",
        fields: [
          { name: "food_type_id" },
        ]
      },
    ]
  });
  }
}
