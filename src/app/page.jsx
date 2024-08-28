import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header>
        <div className='container'>
          <a href='#'>
            <img src='/static/images/logo.svg' alt='fem-manage-logo' />
          </a>
          <nav className='primary-navigation'>
            <ul role='list' className='nav-list'>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Product</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Community</a>
              </li>
            </ul>
          </nav>
          <button className='button'>Get Started</button>
        </div>
      </header>
      <main>
        <section>
          <div className='container'>
            <div className='even-columns'>
              <div>
                <h1 className='fs-primary-heading fw-bold'>
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes It simple for sortware teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className='button'>Get Started</button>
              </div>
              <div>
                <img src='/static/illustration-intro.svg' alt='' />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='even-columns'>
              <div>
                <h2 className='fs-secondary-heading fw-bold'>
                  What's different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul role='list' className='numbered-items'>
                  <li>
                    <h3 className='fs-600 fw-bold'>
                      Track company-wide progress
                    </h3>
                    <p>
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </li>
                  <li>
                    <h3 className='fs-600 fw-bold'>
                      Advanced built- in reports
                    </h3>
                    <p>
                      Set internal delivery estimates and track progress toward
                      company goals. Our customisable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      intormed.
                    </p>
                  </li>
                  <li>
                    <h3 className='fs-600 fw-bold'>
                      Everything you need in one place
                    </h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='carousel'>
          <h2 className='fs-secondary-heading'>What they've said</h2>
          <button className='button'>Get started</button>
        </section>

        <section className='bg-primary-400 text-neutral-100'>
          <div className='container'>
            <div className='even-columns'>
              <div>
                <p className='fs-secondary-heading fw-bold'>
                  Simplify how your team works today.
                </p>
              </div>
              <div>
                <button className='button' datatype='inverted'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-neutral-900 text-neutral-100'>
        <div className='container'>
          <div className='even-columns'>
            <div>
              <a href='#'>
                <img src='/static/images/logo.svg' alt='fem-manage-logo' />
              </a>
              <ul role='list' aria-label='Social links'>
                <li>
                  <a href='#' aria-label='facebook'>
                    <img src='' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='youtube'>
                    <img src='' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='twitter'>
                    <img src='' alt='' />
                  </a>
                </li>
                <li>
                  <a href='3'>
                    <img src='' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src='' alt='' />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <nav className='footer-nav'>
                <ul role='list' aria-label='Footer'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Pricing</a>
                  </li>
                  <li>
                    <a href='#'>Products</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                  <li>
                    <a href='#'>Community</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form action=''>
                <input type='email' />
                <button className='button'>Go</button>
              </form>
              <p>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
