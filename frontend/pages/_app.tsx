import 'antd/dist/antd.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StatelessComponent } from 'react'

const { Header, Content, Footer } = Layout

const CustomApp: StatelessComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const activeMenu = router.pathname.replace(/^\//, '')

  return (
    <Layout>
      <Header className="layout-header">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/logo.svg" />
            </a>
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" selectedKeys={[activeMenu]}>
          <Menu.Item key="water">
            <Link href="/water">
              <a>Water</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="water-quality">
            <Link href="/water-quality">
              <a>Water quality</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="sanitation">
            <Link href="/sanitation">
              <a>Sanitation</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="hygiene">
            <Link href="/hygiene">
              <a>Hygiene</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="data">
            <Link href="/data">
              <a>Data</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="guide">
            <Link href="/guide">
              <a>Guide</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '100px 50px 50px' }}>
        <Component {...pageProps} />
      </Content>

      <Footer>
        <p>
          Ut consequat feugiat justo, ornare dignissim sapien mollis tempor.
          Cras sed dui eget nisl ultricies cursus. Maecenas sollicitudin
          hendrerit cursus. Nullam pulvinar ex at neque maximus, dignissim
          pharetra justo interdum. Phasellus iaculis convallis ante. Proin vel
          interdum lorem, ac ornare neque. Donec quam quam, placerat hendrerit
          pulvinar venenatis, viverra eu neque. Pellentesque non quam velit.
          Aliquam urna quam, ullamcorper eu nisi sed, tempus sodales sapien.
          Aenean finibus mauris leo, sit amet luctus felis aliquet ut. In
          tristique tincidunt felis id posuere. Curabitur nisl orci, tincidunt
          nec ornare id, feugiat in eros. Donec et metus lobortis, bibendum
          mauris vitae, scelerisque ipsum.
        </p>
      </Footer>
    </Layout>
  )
}

export default CustomApp
