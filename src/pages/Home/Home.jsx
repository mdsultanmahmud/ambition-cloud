import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Condition from "../../components/Condition/Condition";
import Packages from "../../components/Packages/Packages";
import Payment from "../../components/Payment/Payment";

const HomePage = () => {
  const [selectedPackage, setSelectedPackage] = useState('package_1')
  const [packageType, setPackageType] = useState('general')
  return (
    <div>
      <Banner />
      <Packages packageProps = {{
        selectedPackage, setSelectedPackage, packageType, setPackageType
      }}/>
      <Condition />
      <Payment props = {{
        selectedPackage, setSelectedPackage, packageType, setPackageType
      }}/>
    </div>
  );
};

export default HomePage;
