import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/img/profile-pic.png";
import { AuthContext } from "../../context/AuthContext";

function Author({ subNav, setSubNav, title }) {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="crancy-header__author" onMouseOver={() => setSubNav(title)}>
      <Link to="#">
        <div className="crancy-header__author-img">
          <img src={profile} alt="#" />
        </div>
      </Link>
      {/* <!-- crancy Profile Hover --> */}
      <div
        className="crancy-balance crancy-profile__hover fm-hover-animation"
        style={{ display: subNav === title ? "block" : "none" }}
      >
        <h3 className="crancy-balance__title">My Profile</h3>
        {/* <!-- crancy Balance List --> */}
        <ul className="crancy-balance_list">
          {/* <li>
            <div className="crancy-balance-info">
              <div className="crancy-balance__img crancy-sbcolor">
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1446 11.7104H3.85544C2.8333 11.7117 1.85337 12.1161 1.1306 12.8351C0.407829 13.5541 0.00123498 14.5288 0 15.5456V19.4473H14V15.5456C13.9988 14.5288 13.5922 13.5541 12.8694 12.8351C12.1466 12.1161 11.1667 11.7117 10.1446 11.7104V11.7104Z"
                    fill="white"
                  />
                  <path
                    d="M7.00041 9.86824C9.64556 9.86824 11.7899 7.80639 11.7899 5.26298C11.7899 2.71956 9.64556 0.657715 7.00041 0.657715C4.35526 0.657715 2.21094 2.71956 2.21094 5.26298C2.21094 7.80639 4.35526 9.86824 7.00041 9.86824Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4 className="crancy-balance-name">
                <Link to="/profile-overview">My Profile</Link>
              </h4>
            </div>
          </li> */}
          {/* <li>
            <div className="crancy-balance-info">
              <div className="crancy-balance__img crancy-color8__bg">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0478 3.23096L9.75947 8.42357C8.53184 9.62616 6.54449 9.62616 5.31687 8.42357L0.0288576 3.23096C0.0200236 3.3284 0 3.41659 0 3.51346V10.9158C0.00206126 12.6183 1.40725 13.9982 3.14106 14.0002H11.9359C13.6697 13.9982 15.0749 12.6183 15.0769 10.9158V3.51346C15.0766 3.41659 15.0566 3.3284 15.0478 3.23096Z"
                    fill="white"
                  />
                  <path
                    d="M8.95951 7.00639L15.0769 1.46295C14.4742 0.55753 13.3936 0.00284454 12.2264 0H2.85025C1.68334 0.00284454 0.602449 0.55753 0 1.46295L6.11742 7.00639C6.90289 7.71582 8.17372 7.71582 8.95951 7.00639Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4 className="crancy-balance-name ">
                <Link to="/chat-messages">Message</Link>
                <span className="crancy-profile__count crancy-color8__bg">
                  19
                </span>
              </h4>
            </div>
          </li> */}
          {/* <li>
            <div className="crancy-balance-info">
              <div className="crancy-balance__img crancy-color5__bg">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_2165)">
                    <path
                      d="M0.0272216 12.9527C0.166049 12.438 0.287605 11.9837 0.411819 11.53C0.545996 11.0406 0.69678 10.5551 0.81103 10.0616C0.846899 9.90709 0.836271 9.70547 0.764533 9.56752C-1.3026 5.58811 1.01163 0.878494 5.42753 0.0952156C9.36649 -0.603832 13.0889 2.60489 12.9787 6.60485C12.8438 11.4909 7.7391 14.4754 3.4049 12.2085C3.27604 12.1415 3.08739 12.119 2.94724 12.1555C1.99604 12.4028 1.05016 12.6708 0.0272216 12.9527ZM5.98948 7.97443C6.33754 7.97443 6.64841 7.97443 7.01441 7.97443C6.79255 7.30722 7.21966 6.97427 7.63547 6.63403C7.73777 6.5498 7.83541 6.45894 7.92641 6.36277C8.54881 5.70683 8.65907 4.74382 8.20207 3.97513C7.74441 3.20512 6.83905 2.83636 5.97221 3.06716C5.09806 3.29996 4.43847 4.17211 4.54275 4.96401C4.8576 4.96401 5.17246 4.96401 5.48199 4.96401C5.59292 4.38501 5.89449 4.05936 6.36212 3.99768C6.7879 3.94197 7.20836 4.17609 7.39103 4.57071C7.59363 5.00712 7.48469 5.42032 7.06157 5.81162C6.76133 6.08952 6.45578 6.36145 6.15819 6.64199C6.08978 6.70633 6.00077 6.79454 5.99678 6.87479C5.97951 7.23559 5.98948 7.59771 5.98948 7.97443ZM6.96326 9.9628C6.96326 9.64379 6.96326 9.34135 6.96326 9.02963C6.63446 9.02963 6.32426 9.02963 6.01605 9.02963C5.96889 10.2188 5.83272 9.96546 6.86362 9.98535C6.88488 9.98668 6.9068 9.97673 6.96326 9.9628Z"
                      fill="white"
                    />
                    <path
                      d="M6.5957 13.977C8.64955 13.8974 10.3686 13.1838 11.7755 11.779C13.1823 10.3743 13.9031 8.65984 13.9794 6.6131C14.1269 6.68937 14.2405 6.7411 14.3461 6.80477C16.7945 8.2798 17.7039 11.4016 16.4139 13.9531C16.283 14.2124 16.2624 14.4346 16.3435 14.7045C16.5408 15.3598 16.7148 16.0217 16.8968 16.681C16.9161 16.7519 16.9254 16.8256 16.9493 16.9536C16.4445 16.8169 15.9715 16.7175 15.5192 16.5596C14.8024 16.3102 14.1721 16.3069 13.4128 16.6166C10.9731 17.6128 8.17063 16.5948 6.80494 14.3471C6.74316 14.2456 6.68737 14.1395 6.5957 13.977Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2165">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h4 className="crancy-balance-name">
                <Link to="/faq">FAQ</Link>
              </h4>
            </div>
          </li> */}
          {/* <li>
            <div className="crancy-balance-info">
              <div className="crancy-balance__img crancy-color6__bg">
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.339642 15.1257C1.03471 16.332 2.57615 16.7465 3.7825 16.0514C3.78333 16.0509 3.78412 16.0505 3.78495 16.05L4.15887 15.834C4.86474 16.4379 5.67609 16.9063 6.55208 17.2155V17.6466C6.55208 19.0389 7.68075 20.1676 9.07302 20.1676C10.4653 20.1676 11.594 19.0389 11.594 17.6466V17.2155C12.4701 16.9058 13.2815 16.4369 13.9872 15.8324L14.3628 16.0492C15.5694 16.7453 17.112 16.3315 17.8081 15.1248C18.5042 13.9182 18.0904 12.3756 16.8837 11.6795L16.5106 11.4644C16.6786 10.5505 16.6786 9.61366 16.5106 8.69974L16.8837 8.48464C18.0904 7.7885 18.5042 6.246 17.8081 5.03933C17.112 3.8327 15.5695 3.41884 14.3628 4.11497L13.9889 4.33094C13.2823 3.72777 12.4704 3.26029 11.594 2.95203V2.52095C11.594 1.12867 10.4653 0 9.07302 0C7.68075 0 6.55208 1.12867 6.55208 2.52095V2.95203C5.67597 3.26175 4.86458 3.73064 4.15887 4.3352L3.78325 4.11757C2.57659 3.4214 1.03408 3.83526 0.337948 5.04189C-0.358187 6.24852 0.0556415 7.79106 1.26231 8.4872L1.63541 8.7023C1.46745 9.61619 1.46745 10.553 1.63541 11.467L1.26231 11.6821C0.0589897 12.38 -0.3535 13.9196 0.339642 15.1257ZM9.07302 6.72253C10.9294 6.72253 12.4343 8.22742 12.4343 10.0838C12.4343 11.9401 10.9294 13.445 9.07302 13.445C7.21666 13.445 5.71178 11.9401 5.71178 10.0838C5.71178 8.22742 7.21666 6.72253 9.07302 6.72253Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4 className="crancy-balance-name">
                <Link to="/settings">Settings</Link>
              </h4>
            </div>
          </li> */}
          <li>
            <div className="crancy-balance-info">
              <div className="crancy-balance__img crancy-color4__bg">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00270606 13.0635C0.00270606 12.9135 0.00270606 12.7637 0.00270606 12.6137C0.00270606 12.4633 0.00270606 12.3131 0.00270606 12.1627C0.00270606 12.0127 0.00270606 11.8629 0.00270606 11.713C0.00270606 11.5625 0.00270606 11.4123 0.00270606 11.2619C0.00270606 11.1119 0.00270606 10.9621 0.00270606 10.8122C0.00270606 10.6617 0.00270606 10.5115 0.00270606 10.3611C0.00270606 10.2111 0.00270606 10.0614 0.00270606 9.91137C0.00270606 9.76094 0.00270606 9.61074 0.00270606 9.4603C0.00270606 9.31032 0.00270606 9.16057 0.00270606 9.01059C0.00270606 8.86015 0.00270606 8.70995 0.00270606 8.55952C0.00270606 8.40953 0.00270606 8.25978 0.00270606 8.1098C0.00270606 7.95937 0.00270606 7.80916 0.00270606 7.65873C0.00270606 7.50875 0.00270606 7.35899 0.00270606 7.20901C0.00270606 7.05858 0.00270606 6.90837 0.00270606 6.75794C0.00270606 6.60796 0.00270606 6.4582 0.00270606 6.30822C0.00270606 6.15779 0.00270606 6.00758 0.00270606 5.85715C0.00270606 5.70717 0.00270606 5.55741 0.00270606 5.40743C0.00270606 5.257 0.00270606 5.10679 0.00270606 4.95636C0.00270606 4.80638 0.00270606 4.65663 0.00270606 4.50664C0.00270606 4.35621 0.00270606 4.20601 0.00270606 4.05557C0.00270606 3.90559 0.00270606 3.75584 0.00270606 3.60586C0.00270606 3.45542 0.00270606 3.30522 0.00270606 3.15479C0.00270606 3.0048 0.00270606 2.85505 0.00270606 2.70507C0.00270606 2.55464 0.00270606 2.40443 0.00270606 2.254C0.00270606 2.10402 0.00270606 1.95426 0.00270606 1.80428C0.00270606 1.65385 0.00270606 1.50364 0.00270606 1.35321C0.00270606 1.20323 0.00270606 1.05347 0.00270606 0.903491C0.0468447 0.350632 0.352212 0.0452646 0.907773 0C1.05775 0 1.20751 0 1.35749 0C1.50792 0 1.65813 0 1.80856 0C1.95854 0 2.1083 0 2.25828 0C2.40871 0 2.55892 0 2.70935 0C2.85933 0 3.00909 0 3.15907 0C3.3095 0 3.45971 0 3.61014 0C3.76012 0 3.90988 0 4.05986 0C4.21029 0 4.3605 0 4.51093 0C4.66091 0 4.81067 0 4.96065 0C5.11108 0 5.26128 0 5.41172 0C5.5617 0 5.71145 0 5.86143 0C6.01187 0 6.16207 0 6.3125 0C6.46249 0 6.61224 0 6.76222 0C6.91266 0 7.06286 0 7.21329 0C7.36327 0 7.51303 0 7.66301 0C7.81344 0 7.96365 0 8.11408 0C8.26406 0 8.41382 0 8.5638 0C8.71423 0 8.86444 0 9.01487 0C9.16485 0 9.31461 0 9.46459 0C9.61502 0 9.76523 0 9.91566 0C10.0656 0 10.2154 0 10.3654 0C10.5158 0 10.666 0 10.8164 0C10.9664 0 11.1162 0 11.2662 0C11.4166 0 11.5668 0 11.7172 0C12.1138 0.015989 12.3937 0.20538 12.5579 0.566371C12.5721 0.61096 12.5865 0.655774 12.6007 0.700363C12.6043 0.723108 12.6079 0.745853 12.6115 0.768372C12.6122 1.77906 12.6128 2.78952 12.6126 3.8002C12.6126 3.84411 12.6243 3.89028 12.5975 3.93172C12.4541 3.93104 12.3106 3.92068 12.1676 3.93735C12.017 3.92383 11.8661 3.92406 11.7154 3.93735C11.5661 3.92406 11.4166 3.92473 11.2673 3.93712C11.1626 3.93442 11.0576 3.92519 10.9536 3.93081C10.8709 3.93532 10.8556 3.90492 10.8561 3.82903C10.8592 3.30747 10.8581 2.78591 10.8577 2.26436C10.8577 2.20851 10.8646 2.15131 10.8365 2.09884C10.8011 1.92543 10.6993 1.81734 10.5241 1.78176C10.4541 1.74325 10.3778 1.75992 10.3046 1.75969C8.09044 1.75856 5.87765 1.75879 3.66509 1.75879C3.5955 1.75879 3.52569 1.75879 3.4561 1.75879C3.45363 1.76757 3.45093 1.77613 3.44845 1.78491C3.65067 1.8858 3.8529 1.98691 4.05513 2.0878C4.35442 2.24657 4.65258 2.40713 4.96065 2.54878C5.25385 2.71768 5.55697 2.86766 5.86211 3.01381C5.95399 3.06944 6.04767 3.12146 6.14879 3.15906C6.33435 3.27031 6.52824 3.3658 6.72416 3.45723C6.83203 3.51488 6.93923 3.57388 7.048 3.62973C7.26869 3.74323 7.5011 3.83916 7.65738 4.04679V4.05377L7.66346 4.05715C7.74521 4.197 7.79926 4.34675 7.82403 4.50687C7.82493 4.65708 7.82605 4.80728 7.82696 4.95749C7.81547 5.10792 7.81547 5.25835 7.82696 5.40878C7.8166 5.55854 7.8166 5.70852 7.82696 5.85828C7.81547 6.00871 7.81547 6.15914 7.82696 6.30957C7.8166 6.45933 7.8166 6.60908 7.82696 6.75884C7.81547 6.90927 7.81547 7.0597 7.82696 7.21013C7.8166 7.35989 7.8166 7.50965 7.82696 7.6594C7.81547 7.80983 7.81547 7.96027 7.82696 8.11092C7.8166 8.26068 7.8166 8.41043 7.82696 8.56019C7.81547 8.71062 7.81547 8.86105 7.82696 9.01149C7.8166 9.16124 7.8166 9.311 7.82696 9.46075C7.81547 9.61119 7.81547 9.76162 7.82696 9.91205C7.8166 10.0618 7.8166 10.2116 7.82696 10.3615C7.81547 10.512 7.81547 10.6624 7.82696 10.8128C7.8166 10.9626 7.8166 11.1123 7.82696 11.2623C7.81547 11.4128 7.81547 11.5632 7.82696 11.7136C7.82493 11.7247 7.82088 11.7357 7.82133 11.7465C7.83349 12.0762 7.7398 12.0228 8.11296 12.0165C8.26339 12.0275 8.41382 12.0275 8.56425 12.0165C8.71378 12.0262 8.86354 12.0262 9.01307 12.0165C9.16373 12.0275 9.31461 12.0275 9.46527 12.0165C9.6148 12.0262 9.76433 12.0262 9.91408 12.0165C10.0645 12.0275 10.2149 12.0278 10.3654 12.0165C10.5982 12.0305 10.7595 11.9251 10.8259 11.7159C10.861 11.6461 10.855 11.5706 10.855 11.4963C10.8552 10.4019 10.8565 9.30739 10.8523 8.21294C10.8518 8.11137 10.8809 8.09066 10.977 8.09156C11.4792 8.09628 11.9814 8.09336 12.4838 8.09381C12.5279 8.09381 12.5743 8.08322 12.6146 8.1125C12.611 8.26203 12.6038 8.41179 12.6185 8.56132C12.6074 8.7113 12.6074 8.86128 12.6185 9.01126C12.6061 9.16147 12.6061 9.31167 12.6185 9.46188C12.6074 9.61186 12.6074 9.76184 12.6185 9.91182C12.6061 10.062 12.6061 10.2122 12.6185 10.3624C12.6074 10.5124 12.6074 10.6624 12.6185 10.8124C12.6061 10.9626 12.6061 11.1128 12.6185 11.263C12.6074 11.413 12.6074 11.563 12.6185 11.713C12.6061 11.8632 12.6061 12.0134 12.6185 12.1636C12.6074 12.3136 12.6074 12.4635 12.6185 12.6135C12.6108 12.7712 12.6029 12.929 12.5953 13.0867C12.5471 13.2438 12.4701 13.3857 12.3656 13.5125C12.2985 13.5643 12.2316 13.6161 12.1645 13.6679C11.9715 13.7663 11.7639 13.7762 11.5524 13.7758C10.3417 13.7737 9.1313 13.7744 7.92064 13.7767C7.88483 13.7767 7.83011 13.7422 7.81007 13.8084C7.80016 13.8604 7.79926 13.9122 7.81074 13.964C7.7979 14.1147 7.79836 14.2653 7.81074 14.416C7.79926 14.5655 7.79903 14.7151 7.81074 14.8646C7.79813 15.015 7.79813 15.1654 7.81074 15.3159C7.79903 15.4654 7.79926 15.6152 7.81074 15.7647C7.79813 15.9154 7.79813 16.066 7.81074 16.2164C7.79903 16.3662 7.79903 16.516 7.81074 16.6657C7.7979 16.8164 7.79858 16.967 7.81029 17.1177C7.79408 17.4784 7.51438 17.6464 7.21307 17.5703C7.19438 17.5523 7.17276 17.5413 7.14618 17.5422C7.02548 17.4663 6.89824 17.403 6.76785 17.3456C6.62328 17.2566 6.47172 17.181 6.31746 17.1112C6.17018 17.0229 6.0175 16.9456 5.86121 16.8747C5.72947 16.7986 5.5957 16.7263 5.4554 16.6666C5.44054 16.645 5.4178 16.6382 5.3937 16.634C5.25498 16.5509 5.11085 16.4777 4.96335 16.411C4.66744 16.2459 4.3677 16.0888 4.06076 15.9451C4.03599 15.9217 4.00739 15.9052 3.97338 15.8994C3.95559 15.8759 3.93059 15.8658 3.90245 15.862C3.83781 15.819 3.77025 15.7818 3.69661 15.7568C3.52389 15.6512 3.34283 15.5613 3.15907 15.4769C2.86564 15.3123 2.56613 15.1594 2.26346 15.0125C1.96485 14.8522 1.66624 14.6914 1.35929 14.5475C1.06541 14.3786 0.762521 14.2271 0.45783 14.0791C0.404683 14.041 0.351536 14.0028 0.298615 13.9647C0.0398636 13.7168 -0.0137333 13.4017 0.00270606 13.0635Z"
                    fill="white"
                  />
                  <path
                    d="M17.9938 5.81633C17.9965 5.83052 17.9995 5.84493 18.0022 5.85912C18.0017 5.94176 18.001 6.02418 18.0006 6.10683C17.981 6.17259 17.9616 6.23857 17.942 6.30433C17.8662 6.48696 17.7182 6.61443 17.5932 6.75923C17.5797 6.75945 17.572 6.76598 17.5711 6.77995C17.42 6.91506 17.2766 7.05806 17.1417 7.20917C17.1277 7.20985 17.1214 7.2175 17.121 7.23102C16.9685 7.36456 16.8262 7.50801 16.6918 7.65956C16.6782 7.65979 16.671 7.66655 16.6704 7.68028C16.5195 7.81563 16.3756 7.95795 16.2411 8.10996C16.2276 8.11086 16.2209 8.11829 16.2204 8.13158C16.068 8.26535 15.9256 8.40902 15.791 8.56035C15.7777 8.5608 15.7705 8.56778 15.7698 8.58107C15.6187 8.71596 15.4746 8.85829 15.3408 9.01075C15.3338 9.01773 15.3266 9.02493 15.3196 9.03192C15.1669 9.16546 15.0253 9.31003 14.8897 9.46069C14.8762 9.46046 14.869 9.46677 14.8688 9.48051C14.7355 9.59378 14.5866 9.67936 14.4195 9.73228C14.2682 9.7557 14.1175 9.75525 13.968 9.71922C13.6264 9.60031 13.4147 9.36611 13.339 9.01097C13.3307 8.85874 13.3462 8.70876 13.3816 8.56058C13.4111 8.46284 13.475 8.38335 13.5205 8.29394C13.5746 8.23382 13.6286 8.17369 13.6827 8.11356C13.7797 8.01785 13.8766 7.92192 13.9736 7.82621C14.0362 7.78095 14.0916 7.72825 14.1367 7.66519C14.2306 7.57264 14.3245 7.47986 14.4184 7.3873C14.4871 7.33663 14.547 7.27718 14.5985 7.20917C14.6852 7.11459 14.7719 7.02001 14.8591 6.92475C14.7154 6.92475 14.5677 6.92475 14.42 6.92475C14.2695 6.91371 14.1189 6.91394 13.9684 6.92475C13.8187 6.91439 13.6689 6.91439 13.5194 6.92475C13.369 6.91371 13.2183 6.91394 13.0679 6.92475C12.9181 6.91439 12.7684 6.91439 12.6188 6.92475C12.4684 6.91371 12.3178 6.91394 12.1673 6.92475C12.0176 6.91439 11.8678 6.91439 11.7183 6.92475C11.5678 6.91371 11.4172 6.91394 11.2668 6.92475C11.117 6.91439 10.9675 6.91439 10.8177 6.92475C10.6671 6.91394 10.5166 6.91394 10.366 6.92475C10.2164 6.91349 10.0669 6.91619 9.91738 6.9234C9.76289 6.91214 9.61359 6.87926 9.47216 6.81508C9.44086 6.79616 9.40956 6.77724 9.37803 6.75833C9.07514 6.50498 8.95556 6.17957 8.9988 5.79066C9.00713 5.75125 9.01569 5.71184 9.02402 5.67265C9.06478 5.58438 9.10554 5.4961 9.1463 5.40782C9.23368 5.28824 9.3402 5.18915 9.46541 5.10988C9.61088 5.04953 9.75771 5.00044 9.9194 5.00066C11.5338 5.00247 13.1485 5.00202 14.7629 5.00134C14.7983 5.00134 14.8364 5.01328 14.8823 4.98242C14.7283 4.82659 14.583 4.66895 14.4204 4.5282C14.4132 4.52099 14.4062 4.51401 14.399 4.50681C14.2641 4.35615 14.122 4.2127 13.9691 4.08028C13.9615 4.07263 13.9538 4.0652 13.9462 4.05754C13.8043 3.91341 13.6626 3.76929 13.5208 3.62539C13.5153 3.61795 13.5102 3.61075 13.5048 3.60332C13.4208 3.46505 13.3705 3.31394 13.3374 3.15653C13.3379 3.11577 13.3368 3.07478 13.339 3.03424C13.3453 2.92345 13.326 2.80792 13.3987 2.70929C13.5237 2.45661 13.7259 2.29672 13.9925 2.2134C14.1272 2.19178 14.2621 2.19291 14.397 2.2107C14.6015 2.27218 14.7792 2.37622 14.9262 2.53318C15.0001 2.612 15.0814 2.68339 15.1595 2.75838C15.1895 2.80072 15.225 2.83787 15.2683 2.86692C15.3748 2.98808 15.4869 3.10338 15.6104 3.20742C15.6385 3.25224 15.6754 3.28804 15.7196 3.31687C15.8238 3.44005 15.9391 3.55242 16.0603 3.65872C16.0966 3.69497 16.1326 3.73123 16.1688 3.76749C16.2756 3.88819 16.3882 4.00327 16.5111 4.10776C16.5391 4.1528 16.5771 4.1877 16.6204 4.2172C16.7246 4.34039 16.8399 4.45253 16.9609 4.55905C16.9917 4.60071 17.0259 4.63922 17.0703 4.6676C17.2617 4.86239 17.4491 5.06124 17.6457 5.25086C17.8117 5.4112 17.938 5.59091 17.9938 5.81633Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4 className="crancy-balance-name">
                <Link to="#" onClick={handleLogout}>
                  Log Out
                </Link>
              </h4>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- End crancy Balance Hover --> */}
    </div>
  );
}

export default Author;