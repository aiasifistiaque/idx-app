import { View, Text } from 'react-native';
import React from 'react';
const Section = ({
	children,
	row,
	align,
	flex,
	justify,
	mv,
	mh,
	mt,
	mb,
	mr,
	ml,
	m,
	style,
}) => {
	return (
		<View
			style={{
				...(m && { margin: m }),
				...(mv && { marginVertical: mv }),
				...(mh && { marginHorizontal: mh }),
				...(mt && { marginTop: mt }),
				...(mb && { marginBottom: mb }),
				...(ml && { marginLeft: ml }),
				...(mr && { marginRight: mr }),

				// marginVertical: mv ? mv : 0,
				// marginHorizontal: mh ? mh : 0,
				// marginTop: mt ? mt : 0,
				// marginBottom: mb ? mb : 0,
				// marginRight: mr ? mr : 0,
				// marginLeft: ml ? ml : 0,
				display: 'flex',
				flex: flex ? flex : 1,
				flexDirection: row ? 'row' : 'column',
				justifyContent: justify ? justify : 'flex-start',
				alignItems: align ? align : 'flex-start',
				...style,
			}}>
			{children}
		</View>
	);
};

export default Section;
