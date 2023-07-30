import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'InspireNote',
  description: 'Discover the best ideas',
}

export default function RootLayout({ children }) {
  return (
   <html lang='en'>
     <head>
        <link rel='icon' href='/assets/images/stroke.svg'/>
      </head>
    <body>
      <Provider>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <main className='app'>
        <Nav />
        {children}
      </main>
      </Provider>
    </body>
   </html>
  )
}
