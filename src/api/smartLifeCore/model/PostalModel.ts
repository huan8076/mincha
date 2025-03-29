export interface GetPostalDataParams {
  com_id: string
}
export interface BEPostalData {
  pd_id: string
  postal_id: string
  tablet_note: string
  tablet_id: string
  create_date: string
  OriginCreateDate: string
  serial_num: number
  transport_code: string
  p_name: string
  p_note: string
  is_refrigerated: number
  postal_typeText: string
  p_status: number
  receive: string
  receive_type: string
  receive_date: string
  community: string
  city: string
  postal_companyText: string
  postal_logisticsText: string
  privacy: string
  privacy_user_id: string
  recevice_note: string
  postal_img: string
  sign_image: string
  SmartLocker: {
    Id: string
    Name: string
    Counter: {
      Id: string
      Name: string
      Sort: number
      ReceiveQrCode: {
        Code: string
      }
    }
    Sort: number
  }
}
