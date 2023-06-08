import '../styles/SignUp.scss'

const SignUp = () => {
  return (
    <>
    <section className="sign-up-container">
      <div className="sign-up-wrapper">
       <div className='sign-up-inner'>
       <div className="title sign-up-title">
          <h2>회원가입</h2>
        </div>
        <form>
          <div className='info-list'>
            <label
                htmlFor="email"
                className='label label-email'
              >
              <input 
                type="email"
                id="email"
                className='input input-email'
                placeholder='이메일'
              />
            </label>
          </div>
          <div className='info-list'>
            <label
                htmlFor="name"
                className='label label-name'
              >
              <input 
                type="name"
                id="name"
                className='input input-name'
                placeholder='이름'
              />
            </label>
          </div>
          <div className='info-list'>
            <label
                htmlFor="password"
                className='label label-password'
              >
              <input 
                type="password"
                id="password"
                className='input input-password'
                placeholder='비밀번호'
              />
            </label>
          </div>
          <div className='info-list'>
            <label
                htmlFor="password-check"
                className='label label-password-checkl'
              >
              <input 
                type="password-check"
                id="password-check"
                className='input input-password-check'
                placeholder='비밀번호 확인'
              />
            </label>
          </div>
          <div className='agree-container'>
            <label className='agree-check'>
              <input type='checkbox' />
              <p>이용약관 및 개인정보수집, 쇼핑정보 수신에 모두 동의합니다.</p>
            </label>
            <div className='agreement-text-box'>
              <div className='agreement-text'>
                <p>1. 개인정보의 수집항목 및 수집 방법</p>
                <p>
                  통계청 나라통계 사이트에서는 기본적인 회원 서비스 제공을 위한
                  필수정보로 실명인증정보와 가입정보로 구분하여 다음의 정보를 수집하고 있습니다.
                  필수 정보를 입력해주셔야 회원 서비스 이용이 가능합니다.
                </p>
                <p>가. 수집하는 개인정보의 항목</p>
                <p>-가입정보: 이메일, 이름, 비밀번호</p>
              </div>
            </div>
          </div>
          <button className="btn sign-up-btn">회원가입</button>
        </form>
       </div>
      </div>
    </section>
    </>
  )
}

export default SignUp