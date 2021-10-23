import "../components/nosotros/nosotros.css"

import NosotrosC from '../components/nosotros/nosotrosC'
import HistoriaC from '../components/nosotros/historiaC';
import ChefsC from '../components/nosotros/chefsC';
import TestimoniosC from '../components/nosotros/testimoniosC';

function nosotros() {
  return (
    <>
      <HistoriaC />
      <NosotrosC />
      <ChefsC />
      <TestimoniosC />
    </>
  );
}

export default nosotros;