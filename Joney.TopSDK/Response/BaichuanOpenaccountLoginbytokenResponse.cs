using System;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace Top.Api.Response
{
    /// <summary>
    /// BaichuanOpenaccountLoginbytokenResponse.
    /// </summary>
    public class BaichuanOpenaccountLoginbytokenResponse : TopResponse
    {
        /// <summary>
        /// name
        /// </summary>
        [XmlElement("name")]
        public string Name { get; set; }

    }
}
