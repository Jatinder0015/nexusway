export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-sm-6 col-md-offset-2 intro-text'>
                <h2 style={{color:"white"}}>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Contact Us
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
