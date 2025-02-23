import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {
    useVersions,
    useLatestVersion,
} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const docsPluginId = undefined;

function DocumentationLabel() {
    return "Documentation";
}

function ReleaseNotesLabel() {
    return "Release Notes";
}

export default function Version() {
    const {
        siteConfig: {organizationName, projectName},
    } = useDocusaurusContext();
    const versions = useVersions(docsPluginId);
    const latestVersion = useLatestVersion(docsPluginId);
    const devVersion = versions.find(
        (version) => version.name === 'dev',
    );
    const pastVersions = versions.filter(
        (version) => version !== latestVersion && version.name !== 'current',
    );
    const repoUrl = `https://github.com/${organizationName}/${projectName}`;

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
                                <Link to={`${repoUrl}/releases/tag/${latestVersion.label.split(' ')[0]}`}>
                                    <ReleaseNotesLabel />
                                </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {devVersion !== latestVersion && (
                    <div className="margin-bottom--lg">
                        <Heading as="h3" id="latest">
                                Next version (Unreleased)
                        </Heading>
                        <p>
                                Here you can find the documentation for work-in-process
                                unreleased version.
                        </p>
                        <table>
                            <tbody>
                            <tr>
                                <th>{devVersion.label}</th>
                                <td>
                                    <Link to={`${devVersion.path}/intro`}>
                                        <DocumentationLabel />
                                    </Link>
                                </td>
                                <td>
                                    <Link href={`${repoUrl}/tree/${devVersion.name}`}>
                                        Source code
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}

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
                                        <Link href={`${repoUrl}/releases/tag/v${version.name}`}>
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