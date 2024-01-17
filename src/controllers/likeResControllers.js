import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);
// Tạo like nhà hàng
const createLikeRes = async (req, res) => {
    try {
        let { user_id, res_id, like_res_date } = req.body;
        let newData = {
            user_id,
            res_id,
            like_res_date,
        };
        await conn.like_res.create(newData);
        res.send("Creat Like Restaurant success");
    } catch (error) {
        res.send(`Error create like restaurant, ${error}`);
    }
};

// Xóa like nhà hàng
const deleteLikeRes = async (req, res) => {
    const { likeId } = req.params;
    try {
        await conn.like_res.destroy({
            where: {
                id: likeId,
            },
        });
        res.send("Delete Like Restaurant success");
    } catch (error) {
        res.send(`Error Delete Like Restaurant, ${error}`);
    }
};

// Lấy danh sách like theo nhà hàng vàng user
const getLikeRes = async (req, res) => {
    const { userId, resId } = req.params;
    try {
       const data = await conn.like_res.findAll({
            where: {
                user_id: userId,
                res_id: resId,
            },
        });
        res.send(data);
    } catch (error) {
        res.send(`Error get like restaurant, ${error}`);
    }
};

export { createLikeRes, deleteLikeRes, getLikeRes };
