import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/index-infotechno/hero'
import ClientsArea from '../containers/global/clients-area'
import FeaturesArea from '../containers/index-infotechno/features-area'
import AboutArea from '../containers/index-infotechno/about-area'
import AboutServiceWrap from '../containers/index-infotechno/about-service-wrap'
import CaseStudyArea from '../containers/index-infotechno/case-study-area'
import TestimonialArea from '../containers/global/testimonial-area/section-two'
import ContactArea from '../containers/index-infotechno/contact-area'

const IndexInfoTechno = ({ location }) => {
    return (
        <Layout location={location}>
            <SEO title="Award-Winning IT Development and Consulting Firm" />
            <Header />
            <main className="site-wrapper-reveal">
                <Hero />
                <ClientsArea />
                <FeaturesArea />
                <AboutServiceWrap>
                    <AboutArea /> 
                </AboutServiceWrap>
                <CaseStudyArea />
                <TestimonialArea />
                <ContactArea />
            </main>
            <Footer />
        </Layout>
    )
}

export default IndexInfoTechno; 