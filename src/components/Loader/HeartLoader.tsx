import React from 'react'
import styles from "./HeartLoader.module.scss";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function HeartLoader() {
  return (
      <div className={cx("cssload-main")}>
          <div className={cx("cssload-heart")}>
              <span className={cx("cssload-heartL")}></span>
              <span className={cx("cssload-heartR")}></span>
              <span className={cx("cssload-square")}></span>
          </div>
          <div className={cx("cssload-shadow")}></div>
      </div>
  );
}

export default HeartLoader