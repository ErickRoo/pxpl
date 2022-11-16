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
      <Link href="/components/Feature5050">
        <p style={{ fontSize: 20, marginBottom: 20 }}>Feature5050</p>
      </Link>
    </div>
  </div>
)

export default ComponentCatalogueBlock
