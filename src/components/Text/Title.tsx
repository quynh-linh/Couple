import classNames from "classnames/bind";
import styles from "./Title.module.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';
interface TitleProps{

}
const cx = classNames.bind(styles)
export default  function Title(props: TitleProps) {
    return (
        <div className={cx("text-container",'text-[40px] md:text-[95px]')}>
            <span><p className="mx-4">26</p></span>
            <span><FavoriteIcon/></span>
            <span><p className="mx-4">04</p></span>
            <span><FavoriteIcon/></span>
            <span><p>2023</p></span>
        </div>
    )
}