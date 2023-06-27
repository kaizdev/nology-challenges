import style from "./CardList.module.scss";

const CardList = ({ children }) => {
    return <section className={style.list}>{children}</section>;
};

export default CardList;
