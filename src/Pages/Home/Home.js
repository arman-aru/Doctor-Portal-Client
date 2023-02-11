import React from 'react';
import Banner from './Home/Banner/Banner';
import ExtraSection from './Home/ExtraSection/ExtraSection';
import InfoCard from './Home/InfoCard/InfoCard';
import Services from './Home/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;