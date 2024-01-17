import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

// Thêm đánh giá
const addRateRestaurant = async (req, res) => {
    let { user_id, res_id, rate_res_amount, rate_res_date } = req.body;
    let newData = {
        user_id,
        res_id,
        rate_res_amount,
        rate_res_date,
    };
    try {
        await conn.rate_res.create(newData);
        res.send("Create new rate successful");
    } catch (error) {
        res.send(`Error create new rate, ${error}`);
    }
};

// Lấy danh sách đánh giá theo nhà hàng và user
const getRateRestaurant = async (req, res) => {
    let { userId, resId } = req.params;
    try {
        const data = await conn.rate_res.findAll({
            where: {
                user_id: userId,
                res_id: resId,
            },
        });
        res.send(data);
    } catch (error) {
        res.send(`Error get rate by user, ${error}`);
    }
};

export { addRateRestaurant, getRateRestaurant };
