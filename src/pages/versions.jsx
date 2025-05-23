import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {
    useVersions,
    useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useEffect} from "react";

const docsPluginId = undefined;

function DocumentationLabel() {
    return "Documentation";
}

function ReleaseNotesLabel() {
    return "Release Notes";
}

export default function Version() {
    const {
        siteConfig: {organizationName, projectName, customFields},
    } = useDocusaurusContext();
    const versions = useVersions(docsPluginId);
    const latestVersion = useLatestVersion(docsPluginId);
    const pastVersions = versions.filter(
        (version) => version !== latestVersion && version.name !== 'current',
    );

    useEffect(() => {
        console.log(latestVersion)
    }, []);

    return (
        <Layout
            title="Versions"
            description="Magmastream Versions page listing all documented site versions">
            <main className="container margin-vert--lg">
                <Heading as="h1">
                        Magmastream documentation versions
                </Heading>

                <div className="margin-bottom--lg">
                    <Heading as="h3" id="next">
                            Current version (Stable)
                    </Heading>
                    <p>
                            Here you can find the documentation for current released version.
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            <th>{latestVersion.label}</th>
                            <td>
                                <Link to={`${latestVersion.path}/intro`}>
                                    <DocumentationLabel />
                                </Link>
                            </td>
                            <td>
                                <Link to={customFields.versionGitLink[latestVersion.name]}>
                                    <ReleaseNotesLabel />
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {(pastVersions.length > 0) && (
                    <div className="margin-bottom--lg">
                        <Heading as="h3" id="archive">
                                Past versions (Not maintained anymore)
                        </Heading>
                        <p>
                                Here you can find documentation for previous versions of
                                Docusaurus.
                        </p>
                        <table>
                            <tbody>
                            {pastVersions.map((version) => (
                                <tr key={version.name}>
                                    <th>{version.label}</th>
                                    <td>
                                        <Link to={`${version.path}${version.name === "2.6.1" ? "/getting-started" : "/intro"}`}>
                                            <DocumentationLabel />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link href={customFields.versionGitLink[version.name]}>
                                            <ReleaseNotesLabel />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="margin-bottom--lg">
                    <Heading as="h3" id="legacy">
                            Magmastream v1 (Legacy)
                    </Heading>
                    <p>
                            Here you can find documentation for legacy version of Magmastream.
                    </p>
                    <table>
                        <tbody>
                        <tr>
                            <th>1.x</th>
                            <td>
                                <Link href="https://github.com/Magmastream-NPM/magmastream/releases/tag/V1">
                                    <ReleaseNotesLabel />
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </Layout>
    );
}