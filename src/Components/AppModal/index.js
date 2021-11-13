import React from 'react'
import { TouchableOpacity,Modal, Text, View, ScrollView } from 'react-native'
import Icon from '../../Utils/Icon';
import styles from './styles';
import PropTypes from 'prop-types'
import Colors from '../../Utils/Colors';

const AppModal = ({
    modalVisible,
    title,
    setModalVisible,
    modalBody,
    modalFooter,
    closeOnTouchOutside
}) => {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableOpacity style={styles.wrapper} 
            onPress={()=>{
              if(closeOnTouchOutside)
              setModalVisible(false)
            
            }}
            >
                <View style={styles.modalView}>
                    <ScrollView>

                <View style={styles.headerModal}>
                  <TouchableOpacity onPress={()=>setModalVisible(false)}>
                  <Icon name='right' type='ant' size={17} color={Colors.grey} />  
                  </TouchableOpacity>
                <Text style={styles.title}>{title || 'Carsist'}</Text>
                <View />
                <View />
                </View>
        
          <View style={styles.footerSeparator} />

            <View style={styles.body}>{modalBody}</View>
            {modalFooter}

            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}

            </ScrollView>
                </View>

         </TouchableOpacity>
        </Modal>
    )
};
AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;

