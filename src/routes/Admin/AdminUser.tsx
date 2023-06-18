import { useState, useEffect } from "react";
import { users } from "~/api/requests";
import styles from "~/styles/Admin/AdminUser.module.scss";

const AdminUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userProfile, setUserProfile] = useState("");

  const tableHead = ["NO", "이름", "이메일"];

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await users();
      console.log(res);
      setAllUsers(res);
    } catch (error) {
      console.log("사용자 관리", error);
    }
  };

  return (
    <>
      <section className={styles.adminUser}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>사용자 관리</h2>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  {tableHead.map(item => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, i) => (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminUser;
