module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        describtion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ImageType: DataTypes.STRING,
        ImageName: DataTypes.STRING,
        ImageData: DataTypes.BLOB('long'),
    }
    , {
        tableName: "komiks",
    }
);
    return Komik;
};