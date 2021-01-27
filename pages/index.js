import Head from 'next/head'

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 lg:px-64">
        <div className="flex items-center w-20 h-20 py-5 -mx-2 lg:w-4/12">
          <img src="/logo.png" alt="Zeitplan Logo" className="w-auto h-auto px-2"/>
          <h3 className="px-2 text-2xl font-bold">ZEITPLAN</h3>
        </div>
        <div className="flex items-center w-4/12 -mx-7">
          <div className="relative mx-7">
            <a href="#" className="font-semibold text-tomato-500">Home</a>
            <div className="absolute w-1 h-1 mt-1 rounded-full bg-tomato-300 inset-x-5"></div>
          </div>
          <div className="relative mx-7">
            <a href="#" className="font-sans font-light text-gray-400">Features</a>
          </div>
          <div className="relative mx-7">
            <a href="#" className="font-sans font-light text-gray-400">About</a>
          </div>
          <div className="relative mx-7">
            <a href="#" className="font-light text-gray-400 sans">Contact</a>
          </div>
        </div>
        <div className="flex items-center w-20 h-20 py-5 lg:w-4/12">
          <a  href="#" className="ml-auto">
            <div className="flex py-2 rounded-lg px-7 bg-tomato-500">
                <h4 className="text-white">Download</h4>
                <div className="w-5 h-5 my-auto ml-2">
                  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.167 10.833h9.883l-3.025 3.634a.834.834 0 101.283 1.066l4.167-5a.987.987 0 00.075-.125c0-.041.042-.066.058-.108a.83.83 0 00.059-.3.83.83 0 00-.059-.3c0-.042-.041-.067-.058-.108a.996.996 0 00-.075-.125l-4.167-5a.833.833 0 00-1.175-.109.832.832 0 00-.108 1.175l3.025 3.634H4.167a.833.833 0 100 1.666z" fill="#fff"/>
                  </svg>
                </div>
            </div>
          </a>
        </div>

      </nav>
      <main className="flex items-center justify-between my-20 lg:px-64">
        <div className="w-1/2">
          <h1 className="font-serif text-6xl">The easiest way to manage college schedules</h1>
          <div className="mt-5 ">
            <p className="text-sm font-light text-gray-500">Datang kuliah terlambat karena ketiduran itu tidak masalah;</p>
            <p className="text-sm font-light text-gray-500">Datang kuliah karena lupa jadwal itu sangat tidak keren.</p>
          </div>
          <div className="flex items-center my-5 -mx-5">
            <button className="px-10 py-3 mx-5 text-white rounded-lg bg-tomato-500">Get Started</button>
            <a href="#" className="flex mx-5 my-auto">
              <div className="w-5 h-5 my-auto mr-3">
                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z" fill="#FE5E44"/></svg>
              </div>
              <h5 className="text-tomato-500">Play Preview</h5>
            </a>
          </div>
          <div className="mt-20">
            <h5 className="text-sm text-gray-400 uppercase">Featured On</h5>
            <div className="flex my-5 -mx-2">
              <div className="w-auto h-5 mx-2 my-auto">
                <img src="/cnn.png" alt=""/>
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <img src="/tirto.png" alt=""/>
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <img src="/forbes.png" alt=""/>
              </div>

              <div className="w-auto h-5 mx-2 my-auto">
                <img src="/google.png" alt=""/>
              </div>

            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/illustration.png" alt=""/>
        </div>
      </main>
    </>
  )
}
