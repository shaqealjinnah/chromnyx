import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const TermsOfUse = () => {

    return (
        <>
            <SEO title="Terms Of Use" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Terms Of Use"
                page="Terms Of Use"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <p>These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.  You are responsible for providing us with your most current e-mail address.  In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.  Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.  These changes will be effective immediately for new users of our Site.  Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.</p>
                                <h4>Applicability of Arbitration Agreement</h4>
                                <p>All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  Unless otherwise agreed to, all arbitration proceedings shall be held in English.  This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.
                                </p>
                                <h4>Notice Requirement and Informal Dispute Resolution</h4>
                                <p>Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to the Company should be sent to: zzz. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.  If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled.</p>
                                <h4>Time Limits</h4>
                                <p>If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.</p>
                                <h4>Confidentiality</h4>
                                <p>All aspects of the arbitration proceeding shall be strictly confidential.  The parties agree to maintain confidentiality unless otherwise required by law.  This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.</p>
                                <h4>Electronic Communications</h4>
                                <p>The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.</p>
                                <h4>Entire Terms</h4>
                                <p>These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company's prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.</p>
                                <h4>Copyright/Trademark Information</h4>
                                <p>Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default TermsOfUse;