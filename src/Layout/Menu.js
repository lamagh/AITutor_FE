import dashboardBlue from "../images/Menu/dashboard-blue.png"
import moeWhite from "../images/Menu/moe-white.png"
import studentWhite from "../images/Menu/student-white.png"
import teacherWhite from "../images/Menu/teacher-white.png"
import adminWhite from "../images/Menu/admin-white.png"
import menuArrow from "../images/Menu/menu-arrow.png"
const Menu = () => {
    return (
        <>
            <button className="menu-arrow">
                <img src={menuArrow} />
            </button>
            <ul className="closed">
                <li className="active">
                    <img src={dashboardBlue} />
                </li>
                <li>
                    <img src={studentWhite} />
                </li>
                <li>
                    <img src={teacherWhite} />
                </li>
                <li>
                    <img src={adminWhite} />
                </li>
                <li>
                    <img src={moeWhite} />
                </li>
            </ul>
        </>
    );
}

export default Menu;