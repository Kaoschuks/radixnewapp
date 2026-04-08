import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Output
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonItem, IonInput, IonLabel, IonButton, IonSelect, IonSelectOption,
  IonRow, IonCol, IonIcon, IonProgressBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonItem, IonInput, IonLabel, IonButton, FormsModule, IonSelect, IonSelectOption,
    IonRow, IonCol, ReactiveFormsModule, NgIf, NgFor, IonIcon, IonProgressBar
  ]
})
export class RegisterFormComponent {
  @Output() onsubmit = new EventEmitter();

  private cdr = inject(ChangeDetectorRef);

  currentStep = 1;
  totalSteps = 4;

  registerForm: FormGroup = new FormGroup({
    // Step 1: Personal Details
    nin: new FormControl('', Validators.required),
    userType: new FormControl('RSA', Validators.required),
    guardianPin: new FormControl(''),
    bvn: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl(''),
    dateOfBirth: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    rsaPin: new FormControl(''),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    nationality: new FormControl('NG', Validators.required),
    stateOfOriginCode: new FormControl('', Validators.required),
    lgaOriginCode: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    residentialAddress: new FormControl('', Validators.required),
    residentialStateCode: new FormControl('', Validators.required),
    residentialLgaCode: new FormControl('', Validators.required),
    pfaCode: new FormControl('', Validators.required),
    apaCode: new FormControl('001'),

    // Step 2: Employment Details
    employerName: new FormControl('', Validators.required),
    employerPhonenumber: new FormControl(''),
    employerStateOfPosting: new FormControl(''),
    employerLga: new FormControl(''),
    employerState: new FormControl(''),

    // Step 3: Next of Kin
    nextOfKinTitle: new FormControl(''),
    nextOfKinGender: new FormControl(''),
    nextOfKinFirstname: new FormControl('', Validators.required),
    nextOfKinSurname: new FormControl('', Validators.required),
    nextOfKinAddress: new FormControl(''),
    nextOfRelationship: new FormControl('', Validators.required),
    nextOfKinPhoneNumber: new FormControl(''),
    nextOfKinEmail: new FormControl(''),

    // Step 4: Images (all required)
    consentForm: new FormControl('', Validators.required),
    signature: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
  });

  validation_messages: { [key: string]: { type: string; message: string }[] } = {
    nin: [{ type: 'required', message: 'NIN is required.' }],
    bvn: [{ type: 'required', message: 'BVN is required.' }],
    userType: [{ type: 'required', message: 'User type is required.' }],
    gender: [{ type: 'required', message: 'Gender is required.' }],
    title: [{ type: 'required', message: 'Title is required.' }],
    firstName: [{ type: 'required', message: 'First name is required.' }],
    lastName: [{ type: 'required', message: 'Last name is required.' }],
    dateOfBirth: [{ type: 'required', message: 'Date of birth is required.' }],
    phoneNumber: [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minlength', message: 'Phone number must be at least 10 digits.' }
    ],
    emailAddress: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Please enter a valid email.' }
    ],
    stateOfOriginCode: [{ type: 'required', message: 'State of origin is required.' }],
    lgaOriginCode: [{ type: 'required', message: 'LGA of origin is required.' }],
    maritalStatus: [{ type: 'required', message: 'Marital status is required.' }],
    residentialAddress: [{ type: 'required', message: 'Residential address is required.' }],
    residentialStateCode: [{ type: 'required', message: 'Residential state is required.' }],
    residentialLgaCode: [{ type: 'required', message: 'Residential LGA is required.' }],
    pfaCode: [{ type: 'required', message: 'PFA is required.' }],
    employerName: [{ type: 'required', message: 'Employer name is required.' }],
    nextOfKinFirstname: [{ type: 'required', message: 'First name is required.' }],
    nextOfKinSurname: [{ type: 'required', message: 'Surname is required.' }],
    nextOfRelationship: [{ type: 'required', message: 'Relationship is required.' }],
    consentForm: [{ type: 'required', message: 'Consent form image is required.' }],
    signature: [{ type: 'required', message: 'Signature image is required.' }],
    photo: [{ type: 'required', message: 'Passport photo is required.' }],
  };

  // Select options
  genderOptions = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' }
  ];

  titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Prof', label: 'Prof' }
  ];

  maritalStatusOptions = [
    { value: 'SINGLE', label: 'Single' },
    { value: 'MARRIED', label: 'Married' },
    { value: 'DIVORCED', label: 'Divorced' },
    { value: 'WIDOWED', label: 'Widowed' }
  ];

  nationalityOptions = [{ value: 'NG', label: 'Nigeria' }];

  userTypeOptions = [
    { value: 'RSA', label: 'RSA Holder' },
    { value: 'MINOR', label: 'Minor' }
  ];

  relationshipOptions = [
    { value: 'SPOUSE', label: 'Spouse' },
    { value: 'CHILD', label: 'Child' },
    { value: 'PARENT', label: 'Parent' },
    { value: 'SIBLING', label: 'Sibling' },
    { value: 'OTHER', label: 'Other' }
  ];

  pfaOptions = [
    { value: '021', label: 'AIICO Pension Managers Ltd' },
    { value: '001', label: 'Stanbic IBTC Pension Managers' },
    { value: '002', label: 'Crusader Sterling Pension Ltd' },
    { value: '003', label: 'Emerald Benefit Pension Ltd' },
    { value: '004', label: 'Fairworth Pension Managers Ltd' },
    { value: '005', label: 'Fidelity Pension Managers' },
    { value: '006', label: 'First Guarantee Pension Ltd' },
    { value: '007', label: 'Fpencil Pension Managers Ltd' },
    { value: '008', label: 'Leadway Assurance Company Ltd' },
    { value: '009', label: 'Nigerian Coal Pension' },
    { value: '010', label: 'Nigerian Reinsurance Corporation' }
  ];

  stateOptions = [
    { value: 'AB', label: 'Abia' },
    { value: 'AD', label: 'Adamawa' },
    { value: 'AK', label: 'Akwa Ibom' },
    { value: 'AN', label: 'Anambra' },
    { value: 'BA', label: 'Bauchi' },
    { value: 'BY', label: 'Bayelsa' },
    { value: 'BE', label: 'Benue' },
    { value: 'BO', label: 'Borno' },
    { value: 'CR', label: 'Cross River' },
    { value: 'DE', label: 'Delta' },
    { value: 'EB', label: 'Ebonyi' },
    { value: 'ED', label: 'Edo' },
    { value: 'EK', label: 'Ekiti' },
    { value: 'EN', label: 'Enugu' },
    { value: 'GO', label: 'Gombe' },
    { value: 'IM', label: 'Imo' },
    { value: 'JG', label: 'Jigawa' },
    { value: 'KD', label: 'Kaduna' },
    { value: 'KN', label: 'Kano' },
    { value: 'KT', label: 'Katsina' },
    { value: 'KE', label: 'Kebbi' },
    { value: 'KO', label: 'Kogi' },
    { value: 'KW', label: 'Kwara' },
    { value: 'LA', label: 'Lagos' },
    { value: 'NA', label: 'Nasarawa' },
    { value: 'NI', label: 'Niger' },
    { value: 'OG', label: 'Ogun' },
    { value: 'ON', label: 'Ondo' },
    { value: 'OS', label: 'Osun' },
    { value: 'OY', label: 'Oyo' },
    { value: 'PL', label: 'Plateau' },
    { value: 'SO', label: 'Sokoto' },
    { value: 'TA', label: 'Taraba' },
    { value: 'YO', label: 'Yobe' },
    { value: 'ZA', label: 'Zamfara' },
    { value: 'FC', label: 'FCT - Abuja' }
  ];

  lgasByState: { [key: string]: { value: string; label: string }[] } = {
    AB: [
      { value: 'AB-ABA-N', label: 'Aba North' }, { value: 'AB-ABA-S', label: 'Aba South' },
      { value: 'AB-ARM', label: 'Arochukwu' }, { value: 'AB-BEN', label: 'Bende' },
      { value: 'AB-IKW', label: 'Ikwuano' }, { value: 'AB-ISN', label: 'Isiala Ngwa North' },
      { value: 'AB-ISS', label: 'Isiala Ngwa South' }, { value: 'AB-ISU', label: 'Isuikwuato' },
      { value: 'AB-OBI', label: 'Obi Ngwa' }, { value: 'AB-OHA', label: 'Ohafia' },
      { value: 'AB-OSI', label: 'Osisioma' }, { value: 'AB-UGW', label: 'Ugwunagbo' },
      { value: 'AB-UKE', label: 'Ukwa East' }, { value: 'AB-UKW', label: 'Ukwa West' },
      { value: 'AB-UMU', label: 'Umu Nneochi' }, { value: 'AB-OPK', label: 'Obingwa' },
      { value: 'AB-ISI', label: 'Isikwuato' }
    ],
    AD: [
      { value: 'AD-DEM', label: 'Demsa' }, { value: 'AD-FUF', label: 'Fufore' },
      { value: 'AD-GAN', label: 'Ganye' }, { value: 'AD-GIR', label: 'Girei' },
      { value: 'AD-GMB', label: 'Gombi' }, { value: 'AD-GUY', label: 'Guyuk' },
      { value: 'AD-HON', label: 'Hong' }, { value: 'AD-JAD', label: 'Jada' },
      { value: 'AD-LAM', label: 'Lamurde' }, { value: 'AD-MAD', label: 'Madagali' },
      { value: 'AD-MAI', label: 'Maiha' }, { value: 'AD-MAP', label: 'Mayo-Belwa' },
      { value: 'AD-MIC', label: 'Michika' }, { value: 'AD-MUN', label: 'Mubi North' },
      { value: 'AD-MUS', label: 'Mubi South' }, { value: 'AD-NUM', label: 'Numan' },
      { value: 'AD-SHE', label: 'Shelleng' }, { value: 'AD-SON', label: 'Song' },
      { value: 'AD-TOU', label: 'Toungo' }, { value: 'AD-YON', label: 'Yola North' },
      { value: 'AD-YOS', label: 'Yola South' }
    ],
    AK: [
      { value: 'AK-ABK', label: 'Abak' }, { value: 'AK-EBO', label: 'Eastern Obolo' },
      { value: 'AK-EKE', label: 'Eket' }, { value: 'AK-ESE', label: 'Esit Eket' },
      { value: 'AK-ESU', label: 'Essien Udim' }, { value: 'AK-ETM', label: 'Etim Ekpo' },
      { value: 'AK-ETI', label: 'Etinan' }, { value: 'AK-IBE', label: 'Ibeno' },
      { value: 'AK-IBS', label: 'Ibesikpo Asutan' }, { value: 'AK-IKN', label: 'Ikono' },
      { value: 'AK-IKA', label: 'Ikot Abasi' }, { value: 'AK-IKT', label: 'Ikot Ekpene' },
      { value: 'AK-INI', label: 'Ini' }, { value: 'AK-ITU', label: 'Itu' },
      { value: 'AK-MBO', label: 'Mbo' }, { value: 'AK-MKP', label: 'Mkpat Enin' },
      { value: 'AK-NSA', label: 'Nsit Atai' }, { value: 'AK-NSI', label: 'Nsit Ibom' },
      { value: 'AK-NSU', label: 'Nsit Ubium' }, { value: 'AK-OBT', label: 'Obot Akara' },
      { value: 'AK-OKB', label: 'Okobo' }, { value: 'AK-ONN', label: 'Onna' },
      { value: 'AK-ORN', label: 'Oron' }, { value: 'AK-ORA', label: 'Oruk Anam' },
      { value: 'AK-UDP', label: 'Udung Uko' }, { value: 'AK-UKF', label: 'Ukanafun' },
      { value: 'AK-URN', label: 'Uruan' }, { value: 'AK-URE', label: 'Urue-Offong/Oruko' },
      { value: 'AK-UYO', label: 'Uyo' }, { value: 'AK-AND', label: 'Andoni' },
      { value: 'AK-OFN', label: 'Ofonimbo' }
    ],
    AN: [
      { value: 'AN-AGU', label: 'Aguata' }, { value: 'AN-AWN', label: 'Awka North' },
      { value: 'AN-AWS', label: 'Awka South' }, { value: 'AN-AYA', label: 'Ayamelum' },
      { value: 'AN-DUN', label: 'Dunukofia' }, { value: 'AN-EKW', label: 'Ekwusigo' },
      { value: 'AN-IDN', label: 'Idemili North' }, { value: 'AN-IDS', label: 'Idemili South' },
      { value: 'AN-IHI', label: 'Ihiala' }, { value: 'AN-NJI', label: 'Njikoka' },
      { value: 'AN-NNN', label: 'Nnewi North' }, { value: 'AN-NNS', label: 'Nnewi South' },
      { value: 'AN-OGB', label: 'Ogbaru' }, { value: 'AN-ONN', label: 'Onitsha North' },
      { value: 'AN-ONS', label: 'Onitsha South' }, { value: 'AN-ORN', label: 'Orumba North' },
      { value: 'AN-ORS', label: 'Orumba South' }, { value: 'AN-OYI', label: 'Oyi' },
      { value: 'AN-ANE', label: 'Anambra East' }, { value: 'AN-ANW', label: 'Anambra West' },
      { value: 'AN-ANM', label: 'Anaocha' }
    ],
    BA: [
      { value: 'BA-ALK', label: 'Alkaleri' }, { value: 'BA-BAU', label: 'Bauchi' },
      { value: 'BA-BOG', label: 'Bogoro' }, { value: 'BA-DAM', label: 'Damban' },
      { value: 'BA-DAR', label: 'Darazo' }, { value: 'BA-DAS', label: 'Dass' },
      { value: 'BA-GAM', label: 'Gamawa' }, { value: 'BA-GAN', label: 'Ganjuwa' },
      { value: 'BA-GIA', label: 'Giade' }, { value: 'BA-ITG', label: 'Itas/Gadau' },
      { value: 'BA-JAM', label: "Jama'are" }, { value: 'BA-KAT', label: 'Katagum' },
      { value: 'BA-KIR', label: 'Kirfi' }, { value: 'BA-MIS', label: 'Misau' },
      { value: 'BA-NIN', label: 'Ningi' }, { value: 'BA-SHA', label: 'Shira' },
      { value: 'BA-TAF', label: 'Tafawa Balewa' }, { value: 'BA-TOR', label: 'Toro' },
      { value: 'BA-WAR', label: 'Warji' }, { value: 'BA-ZAK', label: 'Zaki' }
    ],
    BY: [
      { value: 'BY-BRS', label: 'Brass' }, { value: 'BY-EMO', label: 'Emohua' },
      { value: 'BY-KOL', label: 'Kolokuma/Opokuma' }, { value: 'BY-NEM', label: 'Nembe' },
      { value: 'BY-OGB', label: 'Ogbia' }, { value: 'BY-SAG', label: 'Sagbama' },
      { value: 'BY-SIJ', label: 'Southern Ijaw' }, { value: 'BY-YEN', label: 'Yenagoa' }
    ],
    BE: [
      { value: 'BE-ADO', label: 'Ado' }, { value: 'BE-AGA', label: 'Agatu' },
      { value: 'BE-APA', label: 'Apa' }, { value: 'BE-BUR', label: 'Buruku' },
      { value: 'BE-GBK', label: 'Gboko' }, { value: 'BE-GUM', label: 'Guma' },
      { value: 'BE-GWE', label: 'Gwer East' }, { value: 'BE-GWW', label: 'Gwer West' },
      { value: 'BE-KAT', label: 'Katsina-Ala' }, { value: 'BE-KON', label: 'Konshisha' },
      { value: 'BE-KWA', label: 'Kwande' }, { value: 'BE-LOG', label: 'Logo' },
      { value: 'BE-MAK', label: 'Makurdi' }, { value: 'BE-OBI', label: 'Obi' },
      { value: 'BE-OGD', label: 'Ogbadibo' }, { value: 'BE-OHI', label: 'Ohimini' },
      { value: 'BE-OJU', label: 'Oju' }, { value: 'BE-OTU', label: 'Otukpo' },
      { value: 'BE-TAR', label: 'Tarka' }, { value: 'BE-UKU', label: 'Ukum' },
      { value: 'BE-USH', label: 'Ushongo' }, { value: 'BE-VAN', label: 'Vandikya' },
      { value: 'BE-KAN', label: 'Kankwu' }
    ],
    BO: [
      { value: 'BO-ABA', label: 'Abadam' }, { value: 'BO-ASK', label: 'Askira/Uba' },
      { value: 'BO-BAM', label: 'Bama' }, { value: 'BO-BAY', label: 'Bayo' },
      { value: 'BO-BIU', label: 'Biu' }, { value: 'BO-CHI', label: 'Chibok' },
      { value: 'BO-DAM', label: 'Damboa' }, { value: 'BO-DIK', label: 'Dikwa' },
      { value: 'BO-GUB', label: 'Gubio' }, { value: 'BO-GUZ', label: 'Guzamala' },
      { value: 'BO-GWO', label: 'Gwoza' }, { value: 'BO-HAW', label: 'Hawul' },
      { value: 'BO-JER', label: 'Jere' }, { value: 'BO-KAG', label: 'Kaga' },
      { value: 'BO-KAL', label: 'Kala/Balge' }, { value: 'BO-KON', label: 'Konduga' },
      { value: 'BO-KUK', label: 'Kukawa' }, { value: 'BO-KWK', label: 'Kwaya Kusar' },
      { value: 'BO-MAF', label: 'Mafa' }, { value: 'BO-MAG', label: 'Magumeri' },
      { value: 'BO-MAI', label: 'Maiduguri' }, { value: 'BO-MAR', label: 'Marte' },
      { value: 'BO-MON', label: 'Monguno' }, { value: 'BO-NGA', label: 'Ngada' },
      { value: 'BO-NGN', label: 'Nganzai' }, { value: 'BO-SHA', label: 'Shani' },
      { value: 'BO-BOR', label: 'Borsari' }
    ],
    CR: [
      { value: 'CR-ABI', label: 'Abi' }, { value: 'CR-AKM', label: 'Akamkpa' },
      { value: 'CR-AKP', label: 'Akpabuyo' }, { value: 'CR-BAK', label: 'Bakassi' },
      { value: 'CR-BEK', label: 'Bekwarra' }, { value: 'CR-BIA', label: 'Biase' },
      { value: 'CR-BOK', label: 'Boki' }, { value: 'CR-CAM', label: 'Calabar Municipal' },
      { value: 'CR-CAS', label: 'Calabar South' }, { value: 'CR-ETU', label: 'Etung' },
      { value: 'CR-IKO', label: 'Ikom' }, { value: 'CR-OBU', label: 'Obubra' },
      { value: 'CR-OBD', label: 'Obudu' }, { value: 'CR-ODU', label: 'Odukpani' },
      { value: 'CR-OGA', label: 'Ogoja' }, { value: 'CR-YAK', label: 'Yakuur' },
      { value: 'CR-YAL', label: 'Yala' }, { value: 'CR-UGE', label: 'Ugep' }
    ],
    DE: [
      { value: 'DE-ANN', label: 'Aniocha North' }, { value: 'DE-ANS', label: 'Aniocha South' },
      { value: 'DE-BOM', label: 'Bomadi' }, { value: 'DE-BUR', label: 'Burutu' },
      { value: 'DE-ETE', label: 'Ethiope East' }, { value: 'DE-ETW', label: 'Ethiope West' },
      { value: 'DE-IKN', label: 'Ika North-East' }, { value: 'DE-IKS', label: 'Ika South' },
      { value: 'DE-ISN', label: 'Isoko North' }, { value: 'DE-ISS', label: 'Isoko South' },
      { value: 'DE-NDE', label: 'Ndokwa East' }, { value: 'DE-NDW', label: 'Ndokwa West' },
      { value: 'DE-OKP', label: 'Okpe' }, { value: 'DE-OSN', label: 'Oshimili North' },
      { value: 'DE-OSS', label: 'Oshimili South' }, { value: 'DE-PAT', label: 'Patani' },
      { value: 'DE-SAP', label: 'Sapele' }, { value: 'DE-UDU', label: 'Udu' },
      { value: 'DE-UGN', label: 'Ughelli North' }, { value: 'DE-UGS', label: 'Ughelli South' },
      { value: 'DE-UKW', label: 'Ukwuani' }, { value: 'DE-UVW', label: 'Uvwie' },
      { value: 'DE-WRN', label: 'Warri North' }, { value: 'DE-WRS', label: 'Warri South' },
      { value: 'DE-WRW', label: 'Warri South-West' }
    ],
    EB: [
      { value: 'EB-ABK', label: 'Abakaliki' }, { value: 'EB-AFN', label: 'Afikpo North' },
      { value: 'EB-AFS', label: 'Afikpo South' }, { value: 'EB-EBO', label: 'Ebonyi' },
      { value: 'EB-EZN', label: 'Ezza North' }, { value: 'EB-EZS', label: 'Ezza South' },
      { value: 'EB-IKW', label: 'Ikwo' }, { value: 'EB-ISH', label: 'Ishielu' },
      { value: 'EB-IVO', label: 'Ivo' }, { value: 'EB-OHZ', label: 'Ohaozara' },
      { value: 'EB-OHU', label: 'Ohaukwu' }, { value: 'EB-ONI', label: 'Onicha' },
      { value: 'EB-IZZ', label: 'Izzi' }
    ],
    ED: [
      { value: 'ED-AKE', label: 'Akoko-Edo' }, { value: 'ED-EGO', label: 'Egor' },
      { value: 'ED-EKP', label: 'Esan Central' }, { value: 'ED-ENE', label: 'Esan North-East' },
      { value: 'ED-ESE', label: 'Esan South-East' }, { value: 'ED-ESW', label: 'Esan West' },
      { value: 'ED-ECC', label: 'Etsako Central' }, { value: 'ED-ECE', label: 'Etsako East' },
      { value: 'ED-ECW', label: 'Etsako West' }, { value: 'ED-IGU', label: 'Igueben' },
      { value: 'ED-IKO', label: 'Ikpoba-Okha' }, { value: 'ED-OBR', label: 'Oredo' },
      { value: 'ED-OHM', label: 'Orhionmwon' }, { value: 'ED-OWE', label: 'Owan East' },
      { value: 'ED-OWW', label: 'Owan West' }, { value: 'ED-UHU', label: 'Uhunmwonde' },
      { value: 'ED-OVI', label: 'Ovia North-East' }, { value: 'ED-OVS', label: 'Ovia South-West' }
    ],
    EK: [
      { value: 'EK-ADO', label: 'Ado-Ekiti' }, { value: 'EK-EFO', label: 'Efon' },
      { value: 'EK-EKE', label: 'Ekiti East' }, { value: 'EK-EKS', label: 'Ekiti South-West' },
      { value: 'EK-EKW', label: 'Ekiti West' }, { value: 'EK-EMR', label: 'Emure' },
      { value: 'EK-GBO', label: 'Gbonyin' }, { value: 'EK-IDO', label: 'Ido-Osi' },
      { value: 'EK-IJE', label: 'Ijero' }, { value: 'EK-IKE', label: 'Ikere' },
      { value: 'EK-IKO', label: 'Ikole' }, { value: 'EK-ILE', label: 'Ilejemeje' },
      { value: 'EK-IRP', label: 'Irepodun/Ifelodun' }, { value: 'EK-ISE', label: 'Ise/Orun' },
      { value: 'EK-MOB', label: 'Moba' }, { value: 'EK-OYE', label: 'Oye' }
    ],
    EN: [
      { value: 'EN-AWG', label: 'Awgu' }, { value: 'EN-ENE', label: 'Enugu East' },
      { value: 'EN-ENN', label: 'Enugu North' }, { value: 'EN-ENS', label: 'Enugu South' },
      { value: 'EN-EZE', label: 'Ezeagu' }, { value: 'EN-IGE', label: 'Igbo Etiti' },
      { value: 'EN-IGN', label: 'Igbo-Eze North' }, { value: 'EN-IGS', label: 'Igbo-Eze South' },
      { value: 'EN-ISI', label: 'Isi-Uzo' }, { value: 'EN-NKE', label: 'Nkanu East' },
      { value: 'EN-NKW', label: 'Nkanu West' }, { value: 'EN-NNO', label: 'Nnorji' },
      { value: 'EN-OJR', label: 'Oji-River' }, { value: 'EN-UDN', label: 'Udenu' },
      { value: 'EN-UZO', label: 'Uzo-Uwani' }, { value: 'EN-ULE', label: 'Ute' },
      { value: 'EN-ITE', label: 'Igbo-Eze' }
    ],
    GO: [
      { value: 'GO-AKK', label: 'Akko' }, { value: 'GO-BAL', label: 'Balanga' },
      { value: 'GO-BIL', label: 'Billiri' }, { value: 'GO-DUK', label: 'Dukku' },
      { value: 'GO-FUN', label: 'Funakaye' }, { value: 'GO-GOM', label: 'Gombe' },
      { value: 'GO-KAL', label: 'Kaltungo' }, { value: 'GO-KWA', label: 'Kwami' },
      { value: 'GO-SHO', label: 'Shongom' }, { value: 'GO-YAD', label: 'Yamaltu/Deba' },
      { value: 'GO-NAS', label: 'Nafada' }
    ],
    IM: [
      { value: 'IM-ABH', label: 'Aboh Mbaise' }, { value: 'IM-AHI', label: 'Ahiazu Mbaise' },
      { value: 'IM-EHI', label: 'Ehime Mbano' }, { value: 'IM-EZI', label: 'Ezinihitte' },
      { value: 'IM-IDN', label: 'Ideato North' }, { value: 'IM-IDS', label: 'Ideato South' },
      { value: 'IM-IHP', label: 'Ihitte/Uboma' }, { value: 'IM-IKE', label: 'Ikeduru' },
      { value: 'IM-ISM', label: 'Isiala Mbano' }, { value: 'IM-ISU', label: 'Isu' },
      { value: 'IM-MBL', label: 'Mbaitoli' }, { value: 'IM-NGO', label: 'Ngor Okpala' },
      { value: 'IM-NJB', label: 'Njaba' }, { value: 'IM-NWL', label: 'Nwangele' },
      { value: 'IM-OBW', label: 'Obowo' }, { value: 'IM-OGT', label: 'Oguta' },
      { value: 'IM-OHJ', label: 'Ohaji/Egbema' }, { value: 'IM-OKI', label: 'Okigwe' },
      { value: 'IM-ORL', label: 'Orlu' }, { value: 'IM-ORS', label: 'Orsu' },
      { value: 'IM-ORE', label: 'Oru East' }, { value: 'IM-ORW', label: 'Oru West' },
      { value: 'IM-OWM', label: 'Owerri Municipal' }, { value: 'IM-OWN', label: 'Owerri North' },
      { value: 'IM-OWW', label: 'Owerri West' }, { value: 'IM-UNO', label: 'Unuimo' },
      { value: 'IM-ONS', label: 'Onuimo' }
    ],
    JG: [
      { value: 'JG-AUY', label: 'Auyo' }, { value: 'JG-BAB', label: 'Babura' },
      { value: 'JG-BIR', label: 'Biriniwa' }, { value: 'JG-BKD', label: 'Birnin Kudu' },
      { value: 'JG-BUJ', label: 'Buji' }, { value: 'JG-DUT', label: 'Dutse' },
      { value: 'JG-GAG', label: 'Gagarawa' }, { value: 'JG-GAR', label: 'Garki' },
      { value: 'JG-GUM', label: 'Gumel' }, { value: 'JG-GUR', label: 'Guri' },
      { value: 'JG-GWA', label: 'Gwaram' }, { value: 'JG-GWI', label: 'Gwiwa' },
      { value: 'JG-HAD', label: 'Hadejia' }, { value: 'JG-JAH', label: 'Jahun' },
      { value: 'JG-KAF', label: 'Kafin Hausa' }, { value: 'JG-KAG', label: 'Kaugama' },
      { value: 'JG-KAZ', label: 'Kazaure' }, { value: 'JG-KIR', label: 'Kiri Kasama' },
      { value: 'JG-KIY', label: 'Kiyawa' }, { value: 'JG-MAI', label: 'Maigatari' },
      { value: 'JG-MAM', label: 'Malam Madori' }, { value: 'JG-MIG', label: 'Miga' },
      { value: 'JG-RIN', label: 'Ringim' }, { value: 'JG-RON', label: 'Roni' },
      { value: 'JG-SUL', label: 'Sule Tankarkar' }, { value: 'JG-TAU', label: 'Taura' },
      { value: 'JG-YAN', label: 'Yankwashi' }
    ],
    KD: [
      { value: 'KD-BGR', label: 'Birnin Gwari' }, { value: 'KD-CHI', label: 'Chikun' },
      { value: 'KD-GIW', label: 'Giwa' }, { value: 'KD-IGA', label: 'Igabi' },
      { value: 'KD-IKA', label: 'Ikara' }, { value: 'KD-JAB', label: 'Jaba' },
      { value: 'KD-JEM', label: "Jema'a" }, { value: 'KD-KAC', label: 'Kachia' },
      { value: 'KD-KDN', label: 'Kaduna North' }, { value: 'KD-KDS', label: 'Kaduna South' },
      { value: 'KD-KGK', label: 'Kagarko' }, { value: 'KD-KAJ', label: 'Kajuru' },
      { value: 'KD-KAU', label: 'Kaura' }, { value: 'KD-KRU', label: 'Kauru' },
      { value: 'KD-KUB', label: 'Kubau' }, { value: 'KD-KUD', label: 'Kudan' },
      { value: 'KD-LER', label: 'Lere' }, { value: 'KD-MAK', label: 'Makarfi' },
      { value: 'KD-SAB', label: 'Sabon Gari' }, { value: 'KD-SAN', label: 'Sanga' },
      { value: 'KD-SOB', label: 'Soba' }, { value: 'KD-ZKF', label: 'Zangon Kataf' },
      { value: 'KD-ZAR', label: 'Zaria' }
    ],
    KN: [
      { value: 'KN-AJI', label: 'Ajingi' }, { value: 'KN-ALB', label: 'Albasu' },
      { value: 'KN-BAG', label: 'Bagwai' }, { value: 'KN-BEB', label: 'Bebeji' },
      { value: 'KN-BIC', label: 'Bichi' }, { value: 'KN-BUN', label: 'Bunkure' },
      { value: 'KN-DAL', label: 'Dala' }, { value: 'KN-DAM', label: 'Dambatta' },
      { value: 'KN-DKD', label: 'Dawakin Kudu' }, { value: 'KN-DKT', label: 'Dawakin Tofa' },
      { value: 'KN-DOG', label: 'Doguwa' }, { value: 'KN-FAG', label: 'Fagge' },
      { value: 'KN-GAB', label: 'Gabasawa' }, { value: 'KN-GAR', label: 'Garko' },
      { value: 'KN-GAM', label: 'Garun Mallam' }, { value: 'KN-GAY', label: 'Gaya' },
      { value: 'KN-GEZ', label: 'Gezawa' }, { value: 'KN-GWA', label: 'Gwale' },
      { value: 'KN-GWZ', label: 'Gwarzo' }, { value: 'KN-KAB', label: 'Kabo' },
      { value: 'KN-KNM', label: 'Kano Municipal' }, { value: 'KN-KAR', label: 'Karaye' },
      { value: 'KN-KIB', label: 'Kibiya' }, { value: 'KN-KIR', label: 'Kiru' },
      { value: 'KN-KUM', label: 'Kumbotso' }, { value: 'KN-KUN', label: 'Kunchi' },
      { value: 'KN-KUR', label: 'Kura' }, { value: 'KN-MAD', label: 'Madobi' },
      { value: 'KN-MAK', label: 'Makoda' }, { value: 'KN-MIN', label: 'Minjibir' },
      { value: 'KN-NAS', label: 'Nasarawa' }, { value: 'KN-RAN', label: 'Rano' },
      { value: 'KN-RIM', label: 'Rimin Gado' }, { value: 'KN-ROG', label: 'Rogo' },
      { value: 'KN-SHA', label: 'Shanono' }, { value: 'KN-SUM', label: 'Sumaila' },
      { value: 'KN-TAK', label: 'Takai' }, { value: 'KN-TAR', label: 'Tarauni' },
      { value: 'KN-TOF', label: 'Tofa' }, { value: 'KN-TUD', label: 'Tudun Wada' },
      { value: 'KN-UNG', label: 'Ungogo' }, { value: 'KN-WAR', label: 'Warawa' },
      { value: 'KN-WUD', label: 'Wudil' }
    ],
    KT: [
      { value: 'KT-BAK', label: 'Bakori' }, { value: 'KT-BTC', label: 'Batagarawa' },
      { value: 'KT-BTS', label: 'Batsari' }, { value: 'KT-BAU', label: 'Baure' },
      { value: 'KT-BIN', label: 'Bindawa' }, { value: 'KT-CHA', label: 'Charanchi' },
      { value: 'KT-DMS', label: 'Dan Musa' }, { value: 'KT-DDM', label: 'Dandume' },
      { value: 'KT-DNJ', label: 'Danja' }, { value: 'KT-DAU', label: 'Daura' },
      { value: 'KT-DUT', label: 'Dutsi' }, { value: 'KT-DTM', label: 'Dutsin Ma' },
      { value: 'KT-FAS', label: 'Faskari' }, { value: 'KT-FUN', label: 'Funtua' },
      { value: 'KT-ING', label: 'Ingawa' }, { value: 'KT-JIB', label: 'Jibia' },
      { value: 'KT-KAF', label: 'Kafur' }, { value: 'KT-KAI', label: 'Kaita' },
      { value: 'KT-KNK', label: 'Kankara' }, { value: 'KT-KNI', label: 'Kankia' },
      { value: 'KT-KTC', label: 'Katsina' }, { value: 'KT-KRF', label: 'Kurfi' },
      { value: 'KT-KUS', label: 'Kusada' }, { value: 'KT-MAI', label: "Mai'adua" },
      { value: 'KT-MAL', label: 'Malumfashi' }, { value: 'KT-MAN', label: 'Mani' },
      { value: 'KT-MAS', label: 'Mashi' }, { value: 'KT-MUS', label: 'Musawa' },
      { value: 'KT-RIM', label: 'Rimi' }, { value: 'KT-SAB', label: 'Sabuwa' },
      { value: 'KT-SAF', label: 'Safana' }, { value: 'KT-SND', label: 'Sandamu' },
      { value: 'KT-ZAN', label: 'Zango' }
    ],
    KE: [
      { value: 'KE-ALI', label: 'Aliero' }, { value: 'KE-ARG', label: 'Argungu' },
      { value: 'KE-AUG', label: 'Augie' }, { value: 'KE-BAG', label: 'Bagudo' },
      { value: 'KE-BKB', label: 'Birnin Kebbi' }, { value: 'KE-BUN', label: 'Bunza' },
      { value: 'KE-DAN', label: 'Dandi' }, { value: 'KE-FAK', label: 'Fakai' },
      { value: 'KE-GWD', label: 'Gwandu' }, { value: 'KE-JEG', label: 'Jega' },
      { value: 'KE-KAL', label: 'Kalgo' }, { value: 'KE-KOK', label: 'Koko/Besse' },
      { value: 'KE-MAY', label: 'Maiyama' }, { value: 'KE-NGS', label: 'Ngaski' },
      { value: 'KE-SAK', label: 'Sakaba' }, { value: 'KE-SHA', label: 'Shanga' },
      { value: 'KE-SUR', label: 'Suru' }, { value: 'KE-WAS', label: 'Wasagu/Danko' },
      { value: 'KE-ZUR', label: 'Zuru' }, { value: 'KE-KAM', label: 'Kamba' },
      { value: 'KE-DAK', label: 'Dakkada' }
    ],
    KO: [
      { value: 'KO-ADA', label: 'Adavi' }, { value: 'KO-AJA', label: 'Ajaokuta' },
      { value: 'KO-ANK', label: 'Ankpa' }, { value: 'KO-BAS', label: 'Bassa' },
      { value: 'KO-DEK', label: 'Dekina' }, { value: 'KO-IBJ', label: 'Ibaji' },
      { value: 'KO-IDA', label: 'Idah' }, { value: 'KO-IGM', label: 'Igalamela-Odolu' },
      { value: 'KO-IJU', label: 'Ijumu' }, { value: 'KO-KBB', label: 'Kabba/Bunu' },
      { value: 'KO-KGI', label: 'Kogi' }, { value: 'KO-LOK', label: 'Lokoja' },
      { value: 'KO-MOP', label: 'Mopa-Muro' }, { value: 'KO-OFU', label: 'Ofu' },
      { value: 'KO-OGM', label: 'Ogori/Magongo' }, { value: 'KO-OKE', label: 'Okehi' },
      { value: 'KO-OKN', label: 'Okene' }, { value: 'KO-OLA', label: 'Olamaboro' },
      { value: 'KO-OML', label: 'Omala' }, { value: 'KO-YGE', label: 'Yagba East' },
      { value: 'KO-YGW', label: 'Yagba West' }
    ],
    KW: [
      { value: 'KW-ASA', label: 'Asa' }, { value: 'KW-BAR', label: 'Baruten' },
      { value: 'KW-EDU', label: 'Edu' }, { value: 'KW-EKI', label: 'Ekiti' },
      { value: 'KW-IFE', label: 'Ifelodun' }, { value: 'KW-ILE', label: 'Ilorin East' },
      { value: 'KW-ILS', label: 'Ilorin South' }, { value: 'KW-ILW', label: 'Ilorin West' },
      { value: 'KW-IRE', label: 'Irepodun' }, { value: 'KW-ISI', label: 'Isin' },
      { value: 'KW-KAI', label: 'Kaiama' }, { value: 'KW-MOR', label: 'Moro' },
      { value: 'KW-OFF', label: 'Offa' }, { value: 'KW-OKE', label: 'Oke Ero' },
      { value: 'KW-OYU', label: 'Oyun' }, { value: 'KW-PAT', label: 'Pategi' }
    ],
    LA: [
      { value: 'LA-AGE', label: 'Agege' }, { value: 'LA-AJE', label: 'Ajeromi-Ifelodun' },
      { value: 'LA-ALI', label: 'Alimosho' }, { value: 'LA-AMU', label: 'Amuwo-Odofin' },
      { value: 'LA-APA', label: 'Apapa' }, { value: 'LA-BAD', label: 'Badagry' },
      { value: 'LA-EPE', label: 'Epe' }, { value: 'LA-ETI', label: 'Eti-Osa' },
      { value: 'LA-IBE', label: 'Ibeju-Lekki' }, { value: 'LA-IFJ', label: 'Ifako-Ijaye' },
      { value: 'LA-IKE', label: 'Ikeja' }, { value: 'LA-IKO', label: 'Ikorodu' },
      { value: 'LA-ISL', label: 'Lagos Island' }, { value: 'LA-MAI', label: 'Lagos Mainland' },
      { value: 'LA-MUS', label: 'Mushin' }, { value: 'LA-OJO', label: 'Ojo' },
      { value: 'LA-OSH', label: 'Oshodi-Isolo' }, { value: 'LA-SOM', label: 'Somolu' },
      { value: 'LA-SUR', label: 'Surulere' }, { value: 'LA-KOS', label: 'Kosofe' }
    ],
    NA: [
      { value: 'NA-AKW', label: 'Akwanga' }, { value: 'NA-AWE', label: 'Awe' },
      { value: 'NA-DOM', label: 'Doma' }, { value: 'NA-KRU', label: 'Karu' },
      { value: 'NA-KEA', label: 'Keana' }, { value: 'NA-KEF', label: 'Keffi' },
      { value: 'NA-KOK', label: 'Kokona' }, { value: 'NA-LAF', label: 'Lafia' },
      { value: 'NA-NAS', label: 'Nasarawa' }, { value: 'NA-NEG', label: 'Nasarawa Eggon' },
      { value: 'NA-OBI', label: 'Obi' }, { value: 'NA-TOT', label: 'Toto' },
      { value: 'NA-WAM', label: 'Wamba' }
    ],
    NI: [
      { value: 'NI-AGA', label: 'Agaie' }, { value: 'NI-AGW', label: 'Agwara' },
      { value: 'NI-BID', label: 'Bida' }, { value: 'NI-BOR', label: 'Borgu' },
      { value: 'NI-BOS', label: 'Bosso' }, { value: 'NI-CHA', label: 'Chanchaga' },
      { value: 'NI-EDA', label: 'Edati' }, { value: 'NI-GBK', label: 'Gbako' },
      { value: 'NI-GUR', label: 'Gurara' }, { value: 'NI-KAT', label: 'Katcha' },
      { value: 'NI-KON', label: 'Kontagora' }, { value: 'NI-LAP', label: 'Lapai' },
      { value: 'NI-LAV', label: 'Lavun' }, { value: 'NI-MAG', label: 'Magama' },
      { value: 'NI-MAR', label: 'Mariga' }, { value: 'NI-MAS', label: 'Mashegu' },
      { value: 'NI-MOK', label: 'Mokwa' }, { value: 'NI-MOY', label: 'Moya' },
      { value: 'NI-PAI', label: 'Paikoro' }, { value: 'NI-RAF', label: 'Rafi' },
      { value: 'NI-RIJ', label: 'Rijau' }, { value: 'NI-SHI', label: 'Shiroro' },
      { value: 'NI-SUL', label: 'Suleja' }, { value: 'NI-TAF', label: 'Tafa' },
      { value: 'NI-WUS', label: 'Wushishi' }
    ],
    OG: [
      { value: 'OG-ABN', label: 'Abeokuta North' }, { value: 'OG-ABS', label: 'Abeokuta South' },
      { value: 'OG-ADO', label: 'Ado-Odo/Ota' }, { value: 'OG-EGN', label: 'Ewekoro' },
      { value: 'OG-EGS', label: 'Ifo' }, { value: 'OG-IFO', label: 'Ifo' },
      { value: 'OG-IJE', label: 'Ijebu East' }, { value: 'OG-IJN', label: 'Ijebu North' },
      { value: 'OG-IJE-NE', label: 'Ijebu North-East' }, { value: 'OG-IJO', label: 'Ijebu Ode' },
      { value: 'OG-IKN', label: 'Ikenne' }, { value: 'OG-IME', label: 'Imeko-Afon' },
      { value: 'OG-IPO', label: 'Ipokia' }, { value: 'OG-OBF', label: 'Obafemi-Owode' },
      { value: 'OG-ODD', label: 'Odeda' }, { value: 'OG-ODG', label: 'Odogbolu' },
      { value: 'OG-OGW', label: 'Ogun Waterside' }, { value: 'OG-REM', label: 'Remo North' },
      { value: 'OG-SAG', label: 'Sagamu' }, { value: 'OG-EGB', label: 'Egbado North' }
    ],
    ON: [
      { value: 'ON-AKN', label: 'Akoko North-East' }, { value: 'ON-AKW', label: 'Akoko North-West' },
      { value: 'ON-AKS', label: 'Akoko South-East' }, { value: 'ON-AKE', label: 'Akoko South-West' },
      { value: 'ON-AKN2', label: 'Akure North' }, { value: 'ON-AKS2', label: 'Akure South' },
      { value: 'ON-ESE', label: 'Ese Odo' }, { value: 'ON-IDA', label: 'Idanre' },
      { value: 'ON-IFD', label: 'Ifedore' }, { value: 'ON-ILJ', label: 'Ilaje' },
      { value: 'ON-ILO', label: 'Ile Oluji/Okeigbo' }, { value: 'ON-IRE', label: 'Irele' },
      { value: 'ON-OBD', label: 'Odigbo' }, { value: 'ON-OKT', label: 'Okitipupa' },
      { value: 'ON-ODE', label: 'Ondo East' }, { value: 'ON-ODW', label: 'Ondo West' },
      { value: 'ON-OSE', label: 'Ose' }, { value: 'ON-OWO', label: 'Owo' }
    ],
    OS: [
      { value: 'OS-ATE', label: 'Atakumosa East' }, { value: 'OS-ATW', label: 'Atakumosa West' },
      { value: 'OS-AYE', label: 'Ayedaade' }, { value: 'OS-AYR', label: 'Ayedire' },
      { value: 'OS-BOR', label: 'Boripe' }, { value: 'OS-EDN', label: 'Ede North' },
      { value: 'OS-EDS', label: 'Ede South' }, { value: 'OS-EGB', label: 'Egbedore' },
      { value: 'OS-EJI', label: 'Ejigbo' }, { value: 'OS-IFC', label: 'Ife Central' },
      { value: 'OS-IFE', label: 'Ife East' }, { value: 'OS-IFN', label: 'Ife North' },
      { value: 'OS-IFS', label: 'Ife South' }, { value: 'OS-IFY', label: 'Ifedayo' },
      { value: 'OS-IFO', label: 'Ifelodun' }, { value: 'OS-ILA', label: 'Ila' },
      { value: 'OS-ILE', label: 'Ilesa East' }, { value: 'OS-ILW', label: 'Ilesa West' },
      { value: 'OS-IRE', label: 'Irepodun' }, { value: 'OS-IRW', label: 'Irewole' },
      { value: 'OS-ISO', label: 'Isokan' }, { value: 'OS-IWO', label: 'Iwo' },
      { value: 'OS-OBK', label: 'Obokun' }, { value: 'OS-ODT', label: 'Odo-Otin' },
      { value: 'OS-OLW', label: 'Ola-Oluwa' }, { value: 'OS-OLR', label: 'Olorunda' },
      { value: 'OS-ORI', label: 'Oriade' }, { value: 'OS-ORL', label: 'Orolu' },
      { value: 'OS-OSO', label: 'Osogbo' }
    ],
    OY: [
      { value: 'OY-AFI', label: 'Afijio' }, { value: 'OY-AKI', label: 'Akinyele' },
      { value: 'OY-ATI', label: 'Atisbo' }, { value: 'OY-EGB', label: 'Egbeda' },
      { value: 'OY-IBN', label: 'Ibadan North' }, { value: 'OY-IBNE', label: 'Ibadan North-East' },
      { value: 'OY-IBNW', label: 'Ibadan North-West' }, { value: 'OY-IBSE', label: 'Ibadan South-East' },
      { value: 'OY-IBSW', label: 'Ibadan South-West' }, { value: 'OY-IBC', label: 'Ibarapa Central' },
      { value: 'OY-IBE', label: 'Ibarapa East' }, { value: 'OY-IBN2', label: 'Ibarapa North' },
      { value: 'OY-IDO', label: 'Ido' }, { value: 'OY-IRE', label: 'Irepo' },
      { value: 'OY-ISY', label: 'Iseyin' }, { value: 'OY-ITE', label: 'Itesiwaju' },
      { value: 'OY-IWA', label: 'Iwajowa' }, { value: 'OY-KAJ', label: 'Kajola' },
      { value: 'OY-LAG', label: 'Lagelu' }, { value: 'OY-OGN', label: 'Ogbomosho North' },
      { value: 'OY-OGS', label: 'Ogbomosho South' }, { value: 'OY-OGO', label: 'Ogo Oluwa' },
      { value: 'OY-ONA', label: 'Ona-Ara' }, { value: 'OY-ORE', label: 'Orelope' },
      { value: 'OY-ORI', label: 'Ori Ire' }, { value: 'OY-OYE', label: 'Oyo East' },
      { value: 'OY-OYW', label: 'Oyo West' }, { value: 'OY-SKE', label: 'Saki East' },
      { value: 'OY-SKW', label: 'Saki West' }, { value: 'OY-OLR', label: 'Olorunsogo' },
      { value: 'OY-SHK', label: 'Shaki' }, { value: 'OY-OON', label: 'Oorelope' },
      { value: 'OY-OLU', label: 'Oluyole' }
    ],
    PL: [
      { value: 'PL-BAR', label: 'Barkin Ladi' }, { value: 'PL-BAS', label: 'Bassa' },
      { value: 'PL-BOK', label: 'Bokkos' }, { value: 'PL-JOE', label: 'Jos East' },
      { value: 'PL-JON', label: 'Jos North' }, { value: 'PL-JOS', label: 'Jos South' },
      { value: 'PL-KAN', label: 'Kanam' }, { value: 'PL-KNK', label: 'Kanke' },
      { value: 'PL-LNN', label: 'Langtang North' }, { value: 'PL-LNS', label: 'Langtang South' },
      { value: 'PL-MAN', label: 'Mangu' }, { value: 'PL-MIK', label: 'Mikang' },
      { value: 'PL-PAN', label: 'Pankshin' }, { value: 'PL-QNP', label: "Qua'an Pan" },
      { value: 'PL-RYO', label: 'Riyom' }, { value: 'PL-SHE', label: 'Shendam' },
      { value: 'PL-WAS', label: 'Wase' }
    ],
    SO: [
      { value: 'SO-BIN', label: 'Binji' }, { value: 'SO-BOD', label: 'Bodinga' },
      { value: 'SO-DAS', label: 'Dange Shuni' }, { value: 'SO-GAD', label: 'Gada' },
      { value: 'SO-GOR', label: 'Goronyo' }, { value: 'SO-GUD', label: 'Gudu' },
      { value: 'SO-GWD', label: 'Gwadabawa' }, { value: 'SO-ILL', label: 'Illela' },
      { value: 'SO-ISA', label: 'Isa' }, { value: 'SO-KEB', label: 'Kebbe' },
      { value: 'SO-KWR', label: 'Kware' }, { value: 'SO-RAB', label: 'Rabah' },
      { value: 'SO-SBN', label: 'Sabon Birni' }, { value: 'SO-SHA', label: 'Shagari' },
      { value: 'SO-SIL', label: 'Silame' }, { value: 'SO-SON', label: 'Sokoto North' },
      { value: 'SO-SOS', label: 'Sokoto South' }, { value: 'SO-TAM', label: 'Tambuwal' },
      { value: 'SO-TAN', label: 'Tangaza' }, { value: 'SO-TUR', label: 'Tureta' },
      { value: 'SO-WAM', label: 'Wamako' }, { value: 'SO-WUR', label: 'Wurno' },
      { value: 'SO-YAB', label: 'Yabo' }
    ],
    TA: [
      { value: 'TA-ARK', label: 'Ardo Kola' }, { value: 'TA-BAL', label: 'Bali' },
      { value: 'TA-DON', label: 'Donga' }, { value: 'TA-GAS', label: 'Gashaka' },
      { value: 'TA-GSL', label: 'Gassol' }, { value: 'TA-IBI', label: 'Ibi' },
      { value: 'TA-JAL', label: 'Jalingo' }, { value: 'TA-KRL', label: 'Karim Lamido' },
      { value: 'TA-KUM', label: 'Kumi' }, { value: 'TA-LAU', label: 'Lau' },
      { value: 'TA-SAR', label: 'Sardauna' }, { value: 'TA-TAK', label: 'Takum' },
      { value: 'TA-USS', label: 'Ussa' }, { value: 'TA-WUK', label: 'Wukari' },
      { value: 'TA-YOR', label: 'Yorro' }, { value: 'TA-ZIN', label: 'Zing' }
    ],
    YO: [
      { value: 'YO-BAD', label: 'Bade' }, { value: 'YO-BUR', label: 'Bursari' },
      { value: 'YO-DAM', label: 'Damaturu' }, { value: 'YO-FIK', label: 'Fika' },
      { value: 'YO-FUN', label: 'Fune' }, { value: 'YO-GEI', label: 'Geidam' },
      { value: 'YO-GUJ', label: 'Gujba' }, { value: 'YO-GUL', label: 'Gulani' },
      { value: 'YO-JAK', label: 'Jakusko' }, { value: 'YO-KAR', label: 'Karasuwa' },
      { value: 'YO-MAC', label: 'Machina' }, { value: 'YO-NAN', label: 'Nangere' },
      { value: 'YO-NGR', label: 'Nguru' }, { value: 'YO-POT', label: 'Potiskum' },
      { value: 'YO-TAR', label: 'Tarmuwa' }, { value: 'YO-YUN', label: 'Yunusari' },
      { value: 'YO-YUS', label: 'Yusufari' }
    ],
    ZA: [
      { value: 'ZA-ANK', label: 'Anka' }, { value: 'ZA-BAK', label: 'Bakura' },
      { value: 'ZA-BKM', label: 'Birnin Magaji/Kiyaw' }, { value: 'ZA-BUK', label: 'Bukkuyum' },
      { value: 'ZA-GUM', label: 'Gummi' }, { value: 'ZA-GUS', label: 'Gusau' },
      { value: 'ZA-KRN', label: 'Kaura Namoda' }, { value: 'ZA-MAR', label: 'Maradun' },
      { value: 'ZA-MAU', label: 'Maru' }, { value: 'ZA-SHI', label: 'Shinkafi' },
      { value: 'ZA-TAL', label: 'Talata Mafara' }, { value: 'ZA-TSF', label: 'Tsafe' },
      { value: 'ZA-ZUR', label: 'Zurmi' }, { value: 'ZA-CHF', label: 'Chafe' }
    ],
    FC: [
      { value: 'FC-ABJ', label: 'Abuja Municipal' }, { value: 'FC-BAS', label: 'Bassa' },
      { value: 'FC-GWA', label: 'Gwagwalada' }, { value: 'FC-KUJ', label: 'Kuje' },
      { value: 'FC-KWA', label: 'Kwali' }, { value: 'FC-KOG', label: 'Koton-Karfe' }
    ]
  };

  get filteredOriginLgas() {
    return this.lgasByState[this.registerForm.get('stateOfOriginCode')?.value] || [];
  }

  get filteredResidentialLgas() {
    return this.lgasByState[this.registerForm.get('residentialStateCode')?.value] || [];
  }

  get filteredEmployerLgas() {
    return this.lgasByState[this.registerForm.get('employerStateOfPosting')?.value] || [];
  }

  get isMinor(): boolean {
    return this.registerForm.get('userType')?.value === 'MINOR';
  }

  get canProceed(): boolean {
    return this.getStepFields(this.currentStep)
      .every(field => this.registerForm.get(field)?.valid);
  }

  get isLastStep(): boolean {
    return this.currentStep === this.totalSteps;
  }

  get isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  get progressValue(): number {
    return this.currentStep / this.totalSteps;
  }

  getStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Personal Details';
      case 2: return 'Employment Details';
      case 3: return 'Next of Kin';
      case 4: return 'Upload Images';
      default: return '';
    }
  }

  nextStep() {
    if (!this.canProceed) {
      this.getStepFields(this.currentStep)
        .forEach(f => this.registerForm.get(f)?.markAsTouched());
      return;
    }
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (!this.canProceed) {
      this.getStepFields(this.currentStep)
        .forEach(f => this.registerForm.get(f)?.markAsTouched());
      return;
    }
    this.onsubmit.emit(this.registerForm.value);
  }

  onFileSelected(field: string, event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.registerForm.get(field)?.setValue(reader.result as string);
      this.registerForm.get(field)?.markAsTouched();
      this.cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }

  clearFile(field: string, inputEl: HTMLInputElement) {
    this.registerForm.get(field)?.setValue('');
    inputEl.value = '';
  }

  private getStepFields(step: number): string[] {
    switch (step) {
      case 1: return [
        'nin', 'bvn', 'userType', 'gender', 'title',
        'firstName', 'lastName', 'dateOfBirth', 'phoneNumber', 'emailAddress',
        'nationality', 'stateOfOriginCode', 'lgaOriginCode',
        'maritalStatus', 'residentialAddress', 'residentialStateCode',
        'residentialLgaCode', 'pfaCode'
      ];
      case 2: return ['employerName'];
      case 3: return ['nextOfKinFirstname', 'nextOfKinSurname', 'nextOfRelationship'];
      case 4: return ['consentForm', 'signature', 'photo'];
      default: return [];
    }
  }
}
