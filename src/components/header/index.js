import React from "react";
import { Select } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;
const Header = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div className="text-white bg-[#0083BF] flex justify-center items-center w-full space-x-16 mx-auto h-24">
      <div className="font-bold text-lg">Myhuduu</div>
      <div className="bg-white h-[32px] rounded-full ">
        <Select
          className="rounded-full"
          defaultValue="Категори"
          onChange={onChange}
        >
          <Option value="product">Цагаан идээ</Option>
          <Option value="meat">Мах</Option>
          <Option value="vegetable">Хүнсний ногоо</Option>
          <Option value="fruit">Жимс</Option>
        </Select>
        <input
          className="text-black w-64 px-10 focus:outline-none"
          type={"text"}
          placeholder="Хайх утгаа энд оруулна уу!"
        />
        <SearchOutlined style={{ color: "black" }} />
      </div>
      <div className=" flex items-center space-x-3">
        <button className="">Тусламж</button>
        <button className="">Нэвтрэх</button>
        <button className="bg-blue-600 flex items-center py-[3px] px-5 rounded-2xl space-x-1 font-bold">
          <div className="text-xl">+</div>
          <Link to="/login">
            <button> Зар оруулах</button>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Header;
