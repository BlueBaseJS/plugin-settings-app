import { Column, Container, Row } from '@bluebase/components';

import { CreateSettingsRoutesOptions } from '../../lib';
import React from 'react';
import { SettingsPageDesktop } from '../SettingsPage';
import { SettingsPageList } from '../SettingsPageList';

export interface SettingsLayoutDesktopProps extends CreateSettingsRoutesOptions {
	page?: string;
}

export const SettingsLayoutDesktop = (props: SettingsLayoutDesktopProps) => {
	const { pages, page, filter, mainRoute } = props;

	const pageObj = pages.find(p => p.name === page);

	return (
		<Container>
			<Row>
				<Column xl={2.5} lg={3} md={3} sm={12} xs={12}>
					<SettingsPageList pages={pages} name={mainRoute.name} />
				</Column>
				<Column xl={9.5} lg={9} md={9} sm={12} xs={12}>
					{pageObj ? <SettingsPageDesktop filter={filter} {...pageObj} {...props} /> : null}
				</Column>
			</Row>
		</Container>
	);
};

export default SettingsLayoutDesktop;
