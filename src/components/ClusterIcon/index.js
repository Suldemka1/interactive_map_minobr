import './index.scss'
import L from 'leaflet'

const ClusterIcon = function (cluster) {
  return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'custom-marker-cluster',
      iconSize: L.point(33, 33, true),
  })
}

export default ClusterIcon