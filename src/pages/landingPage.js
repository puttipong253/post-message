function LandingPage() {

  const token = localStorage.getItem('customerToken')
  const baId = localStorage.getItem('baId')

  return (
    <div>
      welcome to test page
      <h1>Token is : {token && token}</h1>
      <h1>BaID is : {baId && baId}</h1>
    </div>
  );
}

export default LandingPage
