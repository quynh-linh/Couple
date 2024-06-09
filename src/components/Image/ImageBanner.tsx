import classNames from "classnames/bind";
import Image from "next/image";
import styles from "../../components/Home/home.module.scss";
import { RefObject, useState } from "react";

interface ImageProps{
    refBanner: RefObject<HTMLDivElement>;
    src: any,
    isViewPort: boolean
    id:string
}

const cx = classNames.bind(styles);
export default function ImageBanner({refBanner,src,isViewPort,id}:ImageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [classNameZoom,setClassNameZoom] = useState<string>("");
    const handleMouseEnter = () => {
        setClassNameZoom("animate__zoomInUp")
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setClassNameZoom("animate__zoomOutUp")
        setTimeout(() => {
            setIsHovered(true);
        }, 300);
    };
    
    return (
        <div 
            className="animate__animated"
            ref={refBanner}
        >
            <a 
                href={id ==="BannerLeft" ? "/profiles/men" : "/profiles/women"}
                style={{position: "relative"}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    className={cx('wrapper-banner-ImgCenter-imgBanner')}
                    src={src}
                    alt="Banner Couple"
                    style={{display: isViewPort ? "block" : "none"}}
                />
                {isHovered ? (
                    <div 
                        className={cx('wrapper-banner-ImgCenter-imgBanner-seeMore',
                                    'animate__animated',classNameZoom)}
                    >
                        <div>
                            <div className="mb-4">
                                <p className={cx('text-white text-sm font-semibold')}>
                                    {id === "BannerLeft" ? "Nguyễn Thanh Quỳnh Linh" : "Lê Thị Kim Yến"}
                                </p>
                                <p className={cx('text-white text-xs font-semibold ')}>
                                    {id === "BannerLeft" ? "21-06-2002" : "06-04-2002"}
                                </p>
                            </div>
                            <span className={cx('wrapper-banner-ImgCenter-imgBanner-seeMore-btn')}>Xem</span>
                        </div>
                    </div>
                ) : ""}
            </a>
        </div>
    )
}