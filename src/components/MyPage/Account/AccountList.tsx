import { useState } from 'react'
import styles from '~/styles/AccountList.module.scss'
import Account from './Account'
import AccountModal from './AccountModal'

const AccountList = () => {
const [showModal, setShowModal] = useState(false)

  return (
    <>
    {showModal && (<AccountModal/>)}
      <section className={styles.account}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>
              <h2>계좌 관리</h2>
            </div>
            <Account />
            <div className={styles.noAccount}>
              <div className={styles.textWrap}>
                <p>등록된 계좌가 없습니다.</p>
                <p>계좌 번호를 등록해 주세요!</p>
              </div>
            </div>
          </div>
          <button
            className={styles.btn}
            onClick={()=>setShowModal(!showModal)}
            >
            계좌 연결
          </button>
        </div>
      </section>
    </>

    
  )
}

export default AccountList