import React, { FunctionComponent } from 'react'
import styles from './component_catalogue.module.scss'
import ComponentCatalogueInterface from './component_catalogue.interface'

export const typename = 'Set_Replicator_BlockComponentCatalogue'

const ComponentCatalogueBlock: FunctionComponent<{ block: ComponentCatalogueInterface }> = ({ block }) => (
  <div className={`${styles.root}`}>
    <div>
      <h1>Components</h1>
    </div>
  </div>
)

export default ComponentCatalogueBlock
