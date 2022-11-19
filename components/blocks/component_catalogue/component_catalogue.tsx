import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './component_catalogue.module.scss'
import ComponentCatalogueInterface from './component_catalogue.interface'

export const typename = 'Set_Replicator_BlockComponentCatalogue'

const ComponentCatalogueBlock: FunctionComponent<{ block: ComponentCatalogueInterface }> = () => (
  <div className={`${styles.root}`}>
    <div>
      <h1 style={{ fontSize: 60, marginBottom: 20 }}>Components</h1>
      <Link href="/components/ContentStack">
        <p style={{ fontSize: 20, marginBottom: 20 }}>Content Stack</p>
      </Link>
      <Link href="/components/PreFooter">
        <p style={{ fontSize: 20, marginBottom: 20 }}>PreFooter</p>
      </Link>
      <Link href="/components/SideSide">
        <p style={{ fontSize: 20, marginBottom: 20 }}>SideSide</p>
      </Link>
      <Link href="/components/Ttac">
        <p style={{ fontSize: 20, marginBottom: 20 }}>Ttac</p>
      </Link>
      <Link href="/components/LargeQuote">
        <p style={{ fontSize: 20, marginBottom: 20 }}>LargeQuote</p>
      </Link>
      <Link href="/components/PromoTout">
        <p style={{ fontSize: 20, marginBottom: 20 }}>PromoTout</p>
      </Link>
    </div>
  </div>
)

export default ComponentCatalogueBlock
