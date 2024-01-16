import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class food_type extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    food_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    food_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'food_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "food_type_id" },
        ]
      },
    ]
  });
  }
}
