import styles from '~/styles/Mypage/MyInfo.module.scss'

const MyInfo = () => {


  return (
  <section className={styles.info}>
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <h2>개인 정보 수정</h2>
        </div>
        <form>
          <div className={styles.infoList}>
            <label
              htmlFor="email"
              className={styles.label}
            >
              <p>이메일</p>
              <input

                type="text"
                id="email"
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.infoList}>
            <label
              htmlFor="displayName"
              className={styles.label}
            >
              <p>이름</p>
              <input

                type="text"
                id="displayName"
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.infoList}>
            <label
              htmlFor="password"
              className={styles.label}
            >
              <p>기존 비밀번호</p>
              <input

                type="password"
                id="password"
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.infoList}>
            <label
              htmlFor="password-check"
              className={styles.label}
            >
              <p>변경 비밀번호</p>
              <input
                type="password"
                id="password-check"
                className={styles.input}
              />
            </label>
          </div>

          <button
            className={styles.btn}
            >
            변경
          </button>
        </form>
      </div>
    </div> 
</section>
  )
}

export default MyInfo